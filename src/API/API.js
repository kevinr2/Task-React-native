const API = ""


export const GetTasks = async () => {
    const res = await fetch(API)
    const result = await res.json()
    return result
}
export const GetTaskId = async (id) => {
    const res = await fetch(`${API}/${id}`)
    return await res.json()
}
export const SaveTasks = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { Accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(newTask)
    })
    return await res.json()
}

export const DeleteTasks = async (id) => {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
    })
}
export const UpdateTask = async (id, task) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { Accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(task)
    })
    return res;
}