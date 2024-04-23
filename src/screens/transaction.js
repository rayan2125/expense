import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { del, edit } from '../redux/transactionReducer'
import Header from '../component.js/header'
import InputText from '../component.js/InputText'
import Button from '../component.js/button'

const Transaction = () => {
    let dispatch = useDispatch()
    let selector = useSelector(state => state.transaction.alltransaction)
    const [open, setOpen] = useState(false)
    const [editdetails, setEditDetails] = useState("")

    const handleDelte = (id) => {

        dispatch(del(id))
    }
    let data = [
        { id: 1, name: "Index" },
        { id: 2, name: "Name" },
        { id: 3, name: "Cost" },
        { id: 4, name: "Actions", }
    ]

    const handleEdit = (item) => {
        setEditDetails(item);
        setOpen(true);
    }

    const handleEditSubmit = (editdetails) => {
        dispatch(edit({ id: editdetails.id, editedItem: editdetails }));
        setOpen(false);
    }

    return (
        <>
            <Header
                name="arrow-left"
                title="Transactions" />
            <View style={{ margin: 10 }}>

                <FlatList
                
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 10, width: 80 }}>

                                <Text style={{ color: "black", fontSize: 16, fontStyle: 'italic' }}>{item.name}</Text>
                            </View>
                        )
                    }} />
                <View style={{ height: 1, backgroundColor: 'black', margin: 5 }}></View>

                <FlatList
                    data={selector}
                    renderItem={({ item, index }) => {

                        return (
                            <>
                                <View 
                                key={index}
                                style={{ margin: 10, flexDirection: "row", width: "100%",alignItems:"center" }}>

                                    <Text style={{ width: "25%", fontStyle: 'italic' }}>{index + 1}</Text>
                                    <Text style={{ width: "25%", fontStyle: 'italic' }}>{item.name}</Text>
                                    <Text style={{ width: "25%", fontStyle: 'italic' }}>{item.cost}</Text>
                                    <View style={{ flexDirection: "row", width: "25%", left: -30, gap: 5 }}>
                                        <TouchableOpacity
                                            onPress={() => handleEdit(item)}
                                            style={{ borderColor: "black", borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>

                                            <Text style={{ fontStyle: 'italic' }}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => handleDelte(item.id)}
                                            style={{ backgroundColor: "red", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>

                                            <Text style={{ color: "white", fontStyle: 'italic' }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ height: 1, backgroundColor: "grey" }}></View>
                            </>
                        );
                    }}
                />
                <Modal
                    transparent={true}
                    visible={open}
                >
                    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.8)", paddingHorizontal: 10, paddingVertical: 10 }}>
                        <View style={{ backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10 }}>

                            <InputText
                                value={editdetails.name}
                                onChangeText={(text) => setEditDetails({ ...editdetails, name: text })}
                            />

                            <InputText
                                value={editdetails.cost}
                                onChangeText={(text) => setEditDetails({ ...editdetails, cost: text })}
                            />

                            <InputText
                                value={editdetails.description}
                                onChangeText={(text) => setEditDetails({ ...editdetails, description: text })}
                            />
                            <Button
                                title="Submit"
                                onPress={() => handleEditSubmit(editdetails)}
                            />

                            <TouchableOpacity
                                onPress={() => setOpen(false)}
                                style={{ backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 10, alignItems: "center", borderRadius: 10, margin: 10 }}>

                                <Text style={{ color: "white", fontSize: 18, fontWeight: '500', fontStyle: 'italic' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default Transaction

const styles = StyleSheet.create({})