/**
 * Ejemplo hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react'

const miContexto = React.createContext(null)
/**
 * 
 * @returns Componente1
 * Dispone de uncontexto que va a recivir desde el padre
 */
const Componente1 = () => {

    // Estado vacio que se rellenara con los datos del padre
    const state = useContext(miContexto)
    
    return (
        <div>
            <h1>El Token es: { state.token }</h1>
            <Componente2></Componente2>
        </div>
    )
}

const Componente2 = () => {
    
    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesion es: { state.sesion }</h2>
        </div>
    )
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '123456',
        sesion: 1
    }

    // Creamos el estado del componentee
    const [sesionData, setSesionData] = useState(estadoInicial)

    function actualizarDatos() {
        setSesionData({
            token: 'FLK1030',
            sesion: sesionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={ sesionData }>
            <h1>Ejemplo useState(), useContext()</h1>
            {/* Todo lo que este aqui adentro puede leer los datos de sesionData */}
            {/* Ademas si se actualizan los componentes de aqui, tambien lo actualizan */}
            <Componente1></Componente1>
            <button onClick={ actualizarDatos }>Actualizar DAtos</button>
        </miContexto.Provider>
    )
}