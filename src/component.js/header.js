import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, name }) => {
    let navigation = useNavigation()
    return (
        <>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center",top:5}}>

            <TouchableOpacity onPress={() => navigation.pop()} style={{width:"35%",left:10}}>

                <Icon name={name} size={25} color="black" />
            </TouchableOpacity>

            <View style={{ alignSelf:"center", }}>
                <Text style={{ fontSize: 20, fontWeight: "500", color: 'black',fontStyle:'italic' }}>{title}</Text>
            </View>
        </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({})