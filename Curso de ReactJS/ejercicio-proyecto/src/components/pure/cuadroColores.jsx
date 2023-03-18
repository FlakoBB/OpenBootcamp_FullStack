import React, { useState } from 'react'

let cambioColor = null

const CuadroColores = () => {
    
let red = 0, green = 0, blue = 0

let estilosContenedor = {
    display: 'grid',
    placeItems: 'center',
    height: '100vh'
}

let estilosCuadro = {
    width: '255px',
    height: '255px',
    backgroundColor: 'black'
}

const [estiloBack, setEstiloBack] = useState(estilosCuadro)

function cuadroOver() {
    cambioColor = setInterval(() => {
        red = Math.round(Math.random() * 255)
        green = Math.round(Math.random() * 255)
        blue = Math.round(Math.random() * 255)
        let nuevoColor = `rgb(${red}, ${green}, ${blue})`
        let tempEstilo = {...estiloBack}
        tempEstilo.backgroundColor = nuevoColor
        setEstiloBack(tempEstilo)
    }, 300)
}

function cuadroOut() {
    clearInterval(cambioColor)
}

    return (
        <div style={ estilosContenedor }>
            <div style={ estiloBack } onMouseOver={ cuadroOver } onMouseOut={ cuadroOut } onDoubleClick={ cuadroOut }></div>
        </div>
    )
}

export default CuadroColores