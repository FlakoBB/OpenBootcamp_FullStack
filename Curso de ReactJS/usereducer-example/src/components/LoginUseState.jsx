import React, { useState } from 'react'

const LoginUseState = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const submit = async (event) => {
        event.preventDefault()
        setError('')
        setIsLoading(true)
        try {
            await function login({userName, password}) {
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (userName === 'admin' && password === 'admin') {
                            resolve()
                        } else {
                            reject()
                        }
                    }, 2000);
                })
            }
            setIsLoggedIn(true)
            setIsLoading(false)
        } catch (error) {
            setError(`Invalid userName or password: ${error}`)
            setIsLoading(false)
            setUserName('')
            setPassword('')
        }
    }

    const logout = () => {
        setIsLoading(false)
        setIsLoggedIn(false)
    }

    return (
        <div>
            <div>
                {
                    isLoggedIn ?
                        (
                            <div>
                                <h1>Welcome { userName }</h1>
                                <button onClick={ logout }>Logout</button>
                            </div>
                        )
                        :
                        (
                            <form onSubmit={ submit }>
                                {
                                    error && <p style={ {color: 'tomato'} }>Error: { error }</p>
                                }

                                <input
                                    type='text'
                                    placeholder='Username'
                                    value={userName}
                                    onChange={ (e) => setUserName(e.currentTarget.value) }
                                />
                                <input
                                    type='text'
                                    placeholder='Password'
                                    value={password}
                                    onChange={ (e) => setPassword(e.currentTarget.value) }
                                />
                                <button type='submit'>{ isLoading ? 'Loading...' : 'Login' }</button>
                            </form>
                        )
                }
            </div>
        </div>
    )
}

export default LoginUseState