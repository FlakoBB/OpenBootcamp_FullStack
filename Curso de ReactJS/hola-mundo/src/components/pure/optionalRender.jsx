import React, { useState } from 'react'

// * Componente (Boton Logout)
const LogoutButton = ({ logoutAction }) => {
    return (
        <button onClick={ logoutAction }>Logout</button>
    )
}

// * Componente (Boton Login)
const LoginButton = ({ loginAction }) => {
    return (
        <button onClick={ loginAction }>Login</button>
    )
}

// * Ejemplo 3: Operador ternario
// ? (Expresion true) && exprecion => se renderiza la exprecion
// ? (Expresion false) && exprecion => no se renderiza la exprecion

const OptionalRender = () => {

    const [access, setAccess] = useState(true)
    const [nMessages, setNMessages] = useState(0)

    // * Ejemplo 1: Funcion que cambia el estado
    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    let optionalButton

    // * Ejemplo 1: Condicion que hace que un elemento tenga un valor diferente
    // if(access) {
    //     optionalButton = <button onClick={ updateAccess }>Logout</button>
    // } else {
    //     optionalButton = <button onClick={ updateAccess }>Login</button>
    // }

    function logoutAction() {
        setAccess(false)
    }

    function loginAction() {
        setAccess(true)
    }

    // * Ejemplo 2: Condicion que hace que se renderice un componente u otro
    if(access) {
        optionalButton = <LogoutButton logoutAction={ logoutAction }></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={ loginAction }></LoginButton>
    }

    // * Ejemplo 3:
    const addMessages = () =>  {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* boton opcional */}
            { optionalButton }
            {/* numero de mensajes sin leer (con operador ternario)*/}
            {/* { nMessages === 0 && <p>No tienes nuevos mensajes</p> }
            { nMessages === 1 && <p>Tienes { nMessages } mensaje sin leer</p> }
            { nMessages > 1 && <p>Tienes { nMessages } mensajes sin leer</p> } */}
            {
                nMessages > 0 ? <p>Tienes { nMessages } mensaje{ nMessages > 1 ? 's' : null } sin leer</p> :
                <p>No tienes nuevos mensjes</p>
            }
            <button onClick={ addMessages }>{nMessages === 0 ? 'Agrega el primer mensaje' : 'Agrega otro mensaje'}</button>
        </div>
    )
}

export default OptionalRender