import axios from 'axios'

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns Promise
 */
export const login = (email, password) => {

    let body = {
        email,
        password
    }

    // Return the response with a promice
    return axios.post('https://reqres.in/api/login', body)
}

export const getAllUsers =  () => {
    return axios.get('https://reqres.in/api/users')
}

export const getPagedUsers =  (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const createUser = (name, job) => {

    let newUser = {
        name,
        job
    }

    return axios.post(`https://reqres.in/api/users`, newUser)
}

export const updateUser = (id, name, job) => {
    
    let newData = {
        name,
        job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, newData)
}

// TODO: delete user
export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}