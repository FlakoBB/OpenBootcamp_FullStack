/**
 * Componente con eslilos definidos en codigo y no con un archivo de estilos independiente
 */

import React, { useState } from 'react';

// ? Estilos para un usuario logueado
const loggedStyle = {
    color: 'green'
}

// ? Estilos para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold' // fontWeight = font-weight
}

const GreetingStyled = (props) => {

    // generamos un estado para identificar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Inicia Sesión</p>) }
            <button className={ logged ? 'btn btn-danger' : 'btn btn-success' } onClick={() => {
                console.log('boton pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'logout' : 'login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
