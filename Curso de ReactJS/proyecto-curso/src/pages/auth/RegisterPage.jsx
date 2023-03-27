import React from 'react'
import { useHistory } from 'react-router-dom'

const RegisterPage = () => {

    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }
    return (
        <div>
            <h1>Register Page</h1>
            <button onClick={ () => navigateTo('/login') }>Login</button>
        </div>
    )
}

export default RegisterPage