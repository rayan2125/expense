import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title,onPress}) => {
  return (
    <View style={{margin:10}} >
        <TouchableOpacity
        onPress={onPress}
        style={{backgroundColor:'black', paddingHorizontal:10,paddingVertical:10,alignItems:"center",borderRadius:10}}>

      <Text style={{color:"white", fontSize:18,fontWeight:'500',fontStyle:'italic'}}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})