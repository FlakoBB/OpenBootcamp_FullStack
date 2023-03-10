/**
 * Ejemplo de uso de:
 * - useState
 * - useRef
 * - useEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    
    // contadores diferentews, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Referencia con useRef para asociar una variable con un elemento del DOM
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    // Trabajando con useEffect()
    /**
     * ? caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en ele estado del componente
     * se ejecuta lo que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Referencia a elemeto del DOM:')
    //     console.log(miRef)
    // })

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR 1
     * Cada vez que haya un cambio en el contador1 se ejecutara lo que este en useEffect()
     * En caso de que cambie lecontador2, no habrá ejecucion
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1')
        console.log('Referencia a elemeto del DOM:')
        console.log(miRef)
    }, [contador1]);

    return (
        <div>
            <h1>Ejemplo useState(), useRef(), useEffect()</h1>
            <h2>CONTADOR 1: { contador1 }</h2>
            <h2>CONTADOR 2: { contador2 }</h2>
            {/* elemeto referenciado */}
            <h4 ref={ miRef }>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar el estado */}
            <div>
                <button onClick={ incrementar1 }>Cambiar Contador 1</button>
                <button onClick={ incrementar2 }>Cambiar Contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
