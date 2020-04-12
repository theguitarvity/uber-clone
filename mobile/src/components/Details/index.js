import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import uberX from '../../assets/uberx.png'

export default function Details(){
  return(
    <View style={styles.container}>
      <Text style={styles.typeTitle}>Popular</Text>
      <Text style={styles.typeDescription}>Viagens baratas para o dia a dia</Text>
      <Image source={uberX} style={styles.typeImage} />
      <Text style={styles.typeTitle}>UberX</Text>
      <Text style={styles.typeDescription}>R$ 6,00</Text>
      <TouchableOpacity onPress={()=>{}} style={styles.requestButton}>
        <Text style={styles.requestButtonText}>
          SOLICITAR UBERX
        </Text>
      </TouchableOpacity>
    </View>
  )
}