export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users') // Recibimos JSON
    console.log(`Response: ${response}`)
    console.log('Status', response.status)
    console.log('OK?', response.ok)
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`) // Recibimos JSON
    console.log(`Response: ${response}`)
    console.log('Status', response.status)
    console.log('OK?', response.ok)
    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`) // Recibimos JSON
    console.log(`Response: ${response}`)
    console.log('Status', response.status)
    console.log('OK?', response.ok)
    return response.json()
}

export const login = async (email, password) => {
    let body = {
        email,
        password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body
    })

    return response.json()
}