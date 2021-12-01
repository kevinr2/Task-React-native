import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import FormScreen from '../screens/FormScreen'
import { TouchableOpacity, Text } from 'react-native'

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={({ navigation }) => ({
                title: 'Tasks',
                headerStyle: { backgroundColor: 'gray' },
                headerShadowVisible: false,
                headerTitleStyle: { color: '#fff', fontSize: 23 },
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("form")} >
                        <Text style={{ color: '#fff', fontSize: 20, marginRight: 8 }} >New</Text>
                    </TouchableOpacity>
                )
            })} />
            <Stack.Screen name='form' component={FormScreen} options={{
                title: 'Create a Task',
                headerStyle: { backgroundColor: 'gray' },
                headerShadowVisible: false,
                headerTitleStyle: { color: '#fff', fontSize: 23 },
                headerTintColor: '#fff'
            }} />
        </Stack.Navigator>
    )
}
