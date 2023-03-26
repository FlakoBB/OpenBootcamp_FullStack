import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const AboutFAQs = () => {

    const location = useLocation() // * obtiene datos de la ruta actual
    const history = useHistory() // * obtiene la lista de rutas que se han visto

    console.log('We are at: ', location.pathname)

    const navigate = (path) => {
        history.push(path)
    }

    const goBavk = () => {
        history.goBack()
    }

    const goForward = () => {
        history.goForward()
    }

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={ () => navigate('/') }>Go home</button>
                <button onClick={ goBavk }>Go back</button>
                <button onClick={ goForward }>Go forward</button>
            </div>
        </div>
    )
}

export default AboutFAQs