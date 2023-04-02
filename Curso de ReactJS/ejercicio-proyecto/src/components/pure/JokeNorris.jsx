import React, { useState } from 'react'
import getRandomJoke from '../../services/AxiosService'
import Button from "@mui/material/Button"

const JokeNorris = () => {

    const [joke, setJoke] = useState(null)
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                console.log(response)
                setJoke(response.data)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const addLike = () => {
        setLikes(likes + 1)
    }

    const addDislike = () => {
        setDislikes(dislikes + 1)
    }

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            {
                joke != null ?
                    (
                        <div>
                            <img alt='Norris' src={ joke.icon_url } />
                            <p>{ joke.value }</p>
                            <Button variant='contained' onClick={ addLike } color='success'>Like</Button>
                            <Button variant='outlined' onClick={ addDislike } color='error'>Dislike</Button>
                        </div>
                    )
                :
                    (
                        <p>Genera un chiste</p>
                    )
            }
            <Button variant='text' onClick={ obtainJoke }>{ joke != null ? 'Other Joke' : 'Get The First Joke' }</Button>
            <div style={ {display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem'} }>
                <span>Likes: { likes }</span>
                <span>Dislikes: { dislikes }</span>
            </div>
        </div>
    )
}

export default JokeNorris