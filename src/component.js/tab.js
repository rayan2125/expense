import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tab = ({ name,onPress,borderColor,textColor }) => {
    return (
        <View style={{margin:10}}>
            <TouchableOpacity onPress={onPress} style={{paddingHorizontal:15,paddingVertical:25,borderColor:borderColor, borderWidth:1.5,borderRadius:10,marginBottom:5,marginTop:5}}>
                 <Text style={{fontSize:20,fontWeight:"500",color:textColor,fontStyle:'italic'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tab

const styles = StyleSheet.create({})