import React, { useState, useEffect } from 'react'

const ClockFunction = () => {
    
    const datosIniciales = {
        fecha: new Date(),
        nombre: 'Flako',
        apellido: 'BB',
        edad: 0
    }

    const [datos, setDatos] = useState(datosIniciales);

    function tick() {
        setDatos((datosPrevios)=> {
            let edad = datosPrevios.edad + 1
            return {
                ...datosPrevios,
                edad,
                fecha: new Date()
            }
        })
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        }
    },)

    return (
        <div>
            <h1>{ datos.nombre } { datos.apellido }</h1>
            <h2>Edad: { datos.edad }</h2>
            <h3>{ datos.fecha.toLocaleTimeString() }</h3>
        </div>
    )

}

export default ClockFunction