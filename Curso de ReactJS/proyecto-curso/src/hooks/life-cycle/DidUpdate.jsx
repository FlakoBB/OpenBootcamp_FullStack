/**
 * Ejemplo de uso de componentDidUpdate en un componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recive nuevos props o cambios en su 3estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate (Clase)</h1>
            </div>
        );
    }
}


// Funcion
export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recive nuevos props o cambios en su 3estado privado')
    }) // Sin corchetes se ejecuta dotas las veces

    return (
        <div>
            <h1>DidUpdate (Funcion)</h1>
        </div>
    )
}