import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const InputText = ({placeholder,onChangeText,value,keyboardType}) => {
  return (
    <View style={{margin:10}}>
     <TextInput style={{borderColor:'black', borderWidth:1,borderRadius:10, fontStyle:'italic',margin:2,fontWeight:'700'}} placeholder={placeholder} onChangeText={onChangeText} value={value} keyboardType={keyboardType}pl />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})