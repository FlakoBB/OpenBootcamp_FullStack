import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {

    const history = useHistory()

    const navigate = (path) => {
        history.push(path)
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // query params
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={ () => navigate('/profile') }>Go to profile</button>
            <button onClick={ () => navigateProps('/state-s') }>Go to State</button>
        </div>
    )
}

export default HomePage