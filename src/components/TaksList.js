import React, { useState, useEffect, useCallback } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import ItemList from './ItemList'
import { DeleteTasks, GetTasks } from '../API/API'

export default function TaksList() {
    const [taks, setTasks] = useState([])
    const [refresh, setRefresh] = useState(false)

    const isfocus = useIsFocused();
    const loadTasks = async () => {
        const data = await GetTasks()
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, [isfocus])
    const onRefresh = useCallback(async () => {
        setRefresh(true)
        await loadTasks()
        setRefresh(false)
    })
    const handleDelete = async (id) => {
        await DeleteTasks(id)
        await loadTasks()
    }
    return (
        <FlatList
            data={taks}
            style={{ width: '85%' }}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
                <ItemList id={item.id} title={item.title} description={item.descripcion} handleDelete={handleDelete} />
            )}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    colors={["#78e08f"]}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}
