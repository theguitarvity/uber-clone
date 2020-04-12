import React, {useEffect, useState, useRef} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import MapView, { Marker } from  'react-native-maps'
import styles from './styles'
import Search from '../../components/Search'
import Directions from '../Directions'
import { getPixelSize } from '../../utils'
import Geocoder from 'react-native-geocoding'
import markerImage from '../../assets/marker.png'
import backImage from '../../assets/back.png'
import Details from '../Details'
Geocoder.init('AIzaSyD8hL3FXNunfdYTUAR8FdOq8j5q82UpR8k')

export default function Map(){
    const [region, setRegion] = useState(null)
    const [destination, setDestination] = useState(null)
    const [duration, setDuration] = useState(0)
    const [location, setLocation] = useState('')

    const mapView = useRef(null)
    
    async function getCurrentPosition(){
        navigator.geolocation.getCurrentPosition(
            async ({coords:{latitude, longitude}}) =>{
                const response = await Geocoder.from(latitude, longitude)
                const address = response.results[0].formatted_address
                const location = address.substring(0, address.indexOf(','))
                setLocation(location)
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta:0.0143,
                    longitudeDelta:0.0134
                })
            },
            () =>{},
            {
                timeout:2000,
                enableHighAccuracy:true,
                maximumAge:1000
            }
        )
    }
    function handleLocationSelected(data, { geometry }){
        const { location:{ lat:latitude, lng:longitude} } = geometry
        const title = data.structured_formatting.main_text
        setDestination({
            latitude,
            longitude,
            title
        })
    }
    function fitCoordinate(result){
        setDuration(Math.floor(result.duration))
        mapView.current.fitToCoordinates(result.coordinates, {
            edgePadding:{
                right:getPixelSize(50),
                left:getPixelSize(50),
                top:getPixelSize(50),
                bottom:getPixelSize(350)
            }
        })
    }
    function handleBack(){
        setDestination(null)
    }
    useEffect(()=>{
        getCurrentPosition()
    }, [])
    return(
        <>
            <MapView 
                style={styles.mapContainer}
                region={region}
                showsUserLocation
                loadingEnabled
                ref={mapView}
            >
                {destination && (
                    <>
                        <Directions
                            destination={destination}
                            origin={region}
                            
                            onReady={fitCoordinate}
                        />
                        <Marker
                            coordinate={destination}
                            achor={{x:0, y:0}}
                            image={markerImage}

                        >
                            <View style={styles.locationBox}>
                                <Text style={styles.locationText}>
                                    { destination.title }
                                </Text>
                            </View>
                        </Marker>
                        <Marker
                            coordinate={region}
                            achor={{x:0, y:0}}

                        >
                            <View style={styles.locationBox}>
                                <View style={styles.locationTimeBox}>
                                    <Text style={styles.locationTimeBoxText}>
                                        {duration}
                                    </Text>
                                    <Text style={styles.locationTimeBoxTextSmall}>MIN</Text>
                                </View>
                                <Text style={styles.locationText}>
                                    {location} 
                                </Text>
                            </View>
                        </Marker>
                    </>
                )}
            </MapView>
            { destination ? (
                <>
                    <TouchableOpacity style={styles.back} onPress={handleBack}>
                        <Image source={backImage}/>
                    </TouchableOpacity>
                    <Details />
                </>
                ) : (
                <Search onLocationSelected={handleLocationSelected} />
                ) }
            
        </>
    )
}