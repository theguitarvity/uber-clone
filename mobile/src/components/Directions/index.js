import React from 'react'
import MapViewDirections from 'react-native-maps-directions'
import {MAPS_API_KEY} from 'react-native-dotenv'

export default function Directions({destination, origin, onReady}){
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={MAPS_API_KEY}
      strokeWidth={3}
      strokeColor="#222"
    />
  )
}