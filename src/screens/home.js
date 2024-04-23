import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Tab from '../component.js/tab'
import { useNavigation } from '@react-navigation/native'
import Header from '../component.js/header'

const Home = () => {
    let navigation = useNavigation()
    let data = [
        { id: 1, name: "Add Income", color: "green" },
        { id: 2, name: "Add Expense", color: "red" },
        { id: 3, name: "Transaction", color: "black" },
    ]
    const handlenavigation = (id) => {
        
        if (id === 2) {
            navigation.navigate("IncomeExpense")
        }
        if (id === 3) {
            navigation.navigate("Transaction")
        }
    }
    return (
        <>
        <Header title="Income Expense"/>
        <View>

            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <Tab name={item.name} onPress={() => handlenavigation(item.id)} textColor={item.color}  borderColor={item.color}/>
                    )
                }} />

        </View>
        </>
    )
}

export default Home