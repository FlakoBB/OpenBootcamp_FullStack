import React, { useEffect, useState } from 'react'
import getRandomUser from '../../services/axiosService'

const AxiosExample = () => {

    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     obtainUser()
    // }, [])
    
    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if(response.status === 200) {
                    setUser(...response.data.results)
                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`)
            })
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {
                user != null ?
                (
                    <div>
                        <img alt='Avatar' src={ user.picture.large }></img>
                        <h2>{ user.name.title } { user.name.first } { user.name.last }</h2>
                        <h3>{ user.email }</h3>
                    </div>
                )
                :
                (
                    <div>
                        <p>Generate a new user</p>
                        <button onClick={ obtainUser }>New User</button>
                    </div>
                )
            }
        </div>
    )
}

export default AxiosExample