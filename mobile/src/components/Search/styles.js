import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'


export default function styles(){
  return {
    container:{
      position: 'absolute',
      top: Platform.select({ ios: 60, android:40 }),
      width:'100%'
      
    },
    textInputContainer:{
      flex:1,
      backgroundColor:'transparent',
      height:54,
      marginHorizontal:20,
      borderTopWidth:0,
      borderTopBottomWidth:0
    },
    textInput:{},
    listView:{
      backgroundColor:'#fff'
    },
    description:{}
  } 
}