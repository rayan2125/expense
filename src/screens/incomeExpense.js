import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../component.js/button'
import InputText from '../component.js/InputText'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/transactionReducer'
import uuid from 'react-native-uuid';
import { RadioButton } from 'react-native-paper'
import Header from '../component.js/header'

const IncomeExpense = () => {
    let dispatch = useDispatch()
    let navigation = useNavigation()
    const [checked, setChecked] = useState('first')


    const [state, setState] = useState({
        id: uuid.v4(),
        name: '',
        cost: '',
        description: ''
    })
   
    const handleSubmit = (state) => {
        dispatch(add(state))
        navigation.navigate("Transaction")
    }
    return (
        <>
        <Header
        title="Add Income-Expense"
        name="arrow-left"
        />
        <View>
            <View style={{ flexDirection: "row", gap: 20, margin: 10 }}>
                <View style={{ flexDirection: "row",alignItems:"center" }}>

                    <Text style={{ color: "green",fontStyle:'italic' }}>Income</Text>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color='green'
                    />
               
                <Text style={{color:"red",fontStyle:'italic'}}>Expense</Text>
                <RadioButton
                // theme={}
                    value="Second"
                    status={checked === 'Second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Second')}
                    color='red'
                />
                 </View>
            </View>
            <InputText placeholder="Enter Name" onChangeText={(text) => setState({ ...state, name: text })} />
            <InputText placeholder="Enter Cost" onChangeText={(text) => setState({ ...state, cost: text })} keyboardType="number-pad" />
            <InputText placeholder="Enter Description" onChangeText={(text) => setState({ ...state, description: text })} />
            <Button
                title="Add Income"
                onPress={() => handleSubmit(state)}
            />
        </View>
        </>
    )
}

export default IncomeExpense