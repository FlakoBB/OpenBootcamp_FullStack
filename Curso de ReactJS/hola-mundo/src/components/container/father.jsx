import React, { useState } from 'react'
import Child from '../pure/child'

const Father = () => {

    const [name, setName] = useState('');

    function showMessage(text) {
        alert(`Message Recived: ${ text }`)
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={ {backgroundColor: 'tomato'} }>
            <p>Componente Father</p>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    )
}

export default Father