/** 
 * Componente funcional con todos los ciclos
 */

import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente Creado')

        const intervaloID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Componente actualizado')
        }, 1000)

        return () => {
            console.log('Componente desaparecerá')
            document.title = 'Tiempo Detenido'
            clearInterval(intervaloID)
        }
    }, [])


    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
