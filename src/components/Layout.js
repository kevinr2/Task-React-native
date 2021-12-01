import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

export default function Layout({ children }) {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="gray" />
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    }
})