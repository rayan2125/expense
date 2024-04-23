import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import IncomeExpense from '../screens/incomeExpense'
import Transaction from '../screens/transaction'

const RootNavigation = () => {
    const Stack = createStackNavigator()
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='IncomeExpense' component={IncomeExpense} 
    
    />
    <Stack.Screen name='Transaction' component={Transaction}/>
   </Stack.Navigator>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})