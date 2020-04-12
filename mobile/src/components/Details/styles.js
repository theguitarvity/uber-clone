import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    height:300,
    width:'100%',
    position:'absolute',
    bottom:0,
    shadowOffset:{
      width:0,
      height:0
    },
    shadowOpacity:0.1,
    shadowRadius:10,
    elevation:3,
    borderWidth:1,
    borderColor:'#ddd',
    alignItems:'center',
    padding:20
    
  },
  typeTitle:{
    fontSize:20,
    color:'#222'
  },
  typeDescription:{
    fontSize:14,
    color:'#666'
  },
  typeImage:{
    height:80,
    marginTop:10,
    marginBottom:10,
    marginLeft:0,
    marginRight:0
  },
  requestButton:{
    backgroundColor:'#222',
    justifyContent:'center',
    alignItems:'center',
    height:44,
    alignSelf:'stretch',
    marginTop:10
  },
  requestButtonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  }


})