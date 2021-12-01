import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { SaveTasks, GetTaskId, UpdateTask } from '../API/API'
import Layout from '../components/Layout'

export default function FormScreen({ navigation, route }) {
    const [Task, setTask] = useState({
        title: "",
        descripcion: ""
    })
    const [editing, setEditing] = useState(false)
    const handleChange = (name, value) => setTask({ ...Task, [name]: value })
    const hadleSubmit = async () => {
        try {
            if (!editing) {
                await SaveTasks(Task)
            } else {
                await UpdateTask(route.params.id, Task)
            }

            navigation.goBack()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (route.params && route.params.id) {
            navigation.setOptions({ headerTitle: 'Updating a Task' });
            setEditing(true);
            (async () => {
                const res = await GetTaskId(route.params.id)

                setTask({
                    title: res[0].title,
                    descripcion: res[0].descripcion
                });
            })();
        }
    }, [])
    return (
        <Layout>
            <View style={style.container}>
                <View style={style.taskcreate}>
                    <View style={style.title}>
                        <TextInput
                            style={style.text}
                            onChangeText={text => handleChange('title', text)}
                            placeholder='Title'
                            value={Task.title}
                        />
                    </View>
                    <View style={style.description}>
                        <TextInput
                            style={style.textArea}
                            onChangeText={text => handleChange('descripcion', text)}
                            multiline={true}
                            numberOfLines={1}
                            placeholder='description'
                            value={Task.descripcion}
                        />
                    </View>
                </View>
                <View style={style.button}>
                    <Button onPress={hadleSubmit} title={`${!editing ? 'save' : 'Update'} a task`} />
                </View>
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    container: {
        width: '85%',
    },
    title: {
        padding: 5,
        marginBottom: 15,
    },
    description: {
        paddingHorizontal: 10,
        paddingBottom: 20,

    },
    button: {
        marginTop: 20
    },
    taskcreate: {
        backgroundColor: 'rgba(251, 244, 109,0.8)',
        borderWidth: 1,
        borderColor: 'white',
        borderBottomRightRadius: 20,
        paddingTop: 5,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    textArea: {
        color: '#000',
        fontSize: 15
    }

})