/**
 * Ejemplo de uso de del metodo de ciclo de vida
 * en un componente de tipo clase
 * y el hook de ciclo de vida en un componente funcional
 */

import React, { Component, useEffect } from 'react'

// Clase
export class Didmount extends Component {
    
    componentDidMount() {
        console.log('Comportamiento antes que el componente sea añadido al DOM (Renderice)')
    }

    render () {
        return (
            <div>
                <h1>DidMount (Clase)</h1>
            </div>
        )
    }
}


// Funcion
export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes que el componente sea añadido al DOM (Renderice)')
    }, []); // Corchetes vacios indica que se ejecuta una vez

    return (
        <div>
            <h1>DidMount (Funcion)</h1>
        </div>
    )
}