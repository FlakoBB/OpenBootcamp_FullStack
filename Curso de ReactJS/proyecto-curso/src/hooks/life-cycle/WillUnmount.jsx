/**
 * 
 * Ejemplo del usop del metodo componentWillUnmount en Clase
 * y uso de hook para un componente funcional
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount (Clase)</h1>
            </div>
        );
    }
}


// Funcion
export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    }, [])

    return (
        <div>
            <h1>WillUnmount (Funcion)</h1>
        </div>
    )
}