import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ItemList({ title, description, id, handleDelete }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("form", { id: id })}>
            <View style={[style.container, style.shadowProp]}>
                <View style={style.deleteP}>
                    <TouchableOpacity style={style.delete} onPress={() => handleDelete(id)}>
                        <Text style={style.icon}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.title}>
                    <Text style={style.text}>{title}</Text>
                </View>
                <Text style={style.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 20,
        marginBottom: 10,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(251, 244, 109,0.8)',
        width: '100%'
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    title: {
        marginBottom: 5
    },
    description: {
        fontSize: 14
    },
    delete: {
        width: 20,
        height: 20,
        padding: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteP: {
        alignItems: 'flex-end',
        width: '100%',
        marginLeft: '7%',
        marginBottom: '3%'
    },
    icon: {
        color: 'gray',
        fontSize: 15
    }

})