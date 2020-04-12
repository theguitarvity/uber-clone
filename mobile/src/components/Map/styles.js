import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    mapContainer:{
        flex:1
    },
    locationBox:{
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.1,
        elevation:1,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:3,
        flexDirection:'row',
        marginTop: Platform.select({
            ios:20,
            android:10
        }),
        marginLeft: Platform.select({
            ios:0,
            android:13
        })
        

    },
    locationText:{
        marginTop:8,
        marginRight:10,
        marginLeft:10,
        marginBottom:8,
        fontSize:14,
        color:'#333'
    },
    locationTimeBox:{
        backgroundColor:'#222',
        paddingTop:3,
        paddingBottom:3,
        paddingLeft:8,
        paddingRight:8
    },
    locationTimeBoxText:{
        color:'#fff',
        fontSize:12,
        textAlign:'center'

    },
    locationTimeBoxTextSmall:{
        color:'#fff',
        fontSize:10,
        textAlign:'center'
    },
    back:{
        position:'absolute',
        top:Platform.select({
            ios:60,
            android:40
        }),
        left:20
    }
})