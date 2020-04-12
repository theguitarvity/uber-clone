import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

export default function Directions({destination, origin, onReady}){
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyD8hL3FXNunfdYTUAR8FdOq8j5q82UpR8k"
      strokeWidth={3}
      strokeColor="#222"
    />
  )
}