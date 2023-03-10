/**
 * Ejemplo de uso del hook 'useState'
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y, ademas, poder modificarlo.
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para contador
    const valorInicial = 0

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Flako',
        email: 'flako@mail.com'
    }

    /**
     * Queremos que valorInicial y personaInicial sean parte del estado del componente
     * para así poder gestionar su cambio y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambio] = useState[valorInicial]
     */

    const [Contador, setContador] = useState(valorInicial)
    const [Persona, setPersona] = useState(personaInicial)

    // Funcion para actualizar el estado privado que contiene el contador
    function incrementaContador() {
        // ? funcionParaCambio(nuevoValor)
        setContador(Contador + 1)
    }

    // Funcion para actualizar ele estado de persona en el componente
    function actualizarPersona() {
        setPersona({
            nombre: 'Arturo',
            email: 'arturo@mail.com'
        })
    }

    return (
        <div>
            <h2>Ejemplo de useState</h2>
            <h3>CONTADOR: { Contador }</h3>
            <h2>Datos de la persona</h2>
            <h3>NOMBRE: { Persona.nombre }</h3>
            <h3>EMAIL: { Persona.email }</h3>

            <button onClick={ incrementaContador }>Incrementar Contador</button>
            <button onClick={ actualizarPersona }>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
