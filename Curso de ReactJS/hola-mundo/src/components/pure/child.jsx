import React, { useRef } from 'react'

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        let text = messageRef.current.value
        alert(`Texto del input: ${ text }`)
    }

    function pressButtonParameters(text) {
        alert(`Button Pressed: ${ text }`)
    }

    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={ {backgroundColor: 'cyan'} }>
            <p onMouseOver={ () => console.log('Mouse over Text') }>Hola { name }</p>
            <button onClick={() => {console.log('Pressed button1')}}>Button 1</button>
            <button onClick={ () => pressButton() }>Button 2</button>
            <button onClick={ () => pressButtonParameters('textou') }>Button 3</button>
            <input 
                placeholder='Insert Text'
                onFocus={ () => console.log('Input Focused') }
                // onChange={ (e) => console.log('Change: ', e.target.value) }
                onCopy={ () => console.log('Text copied from input',)}
                ref={messageRef}
            />
            <button onClick={ () => send(messageRef.current.value) }>Send a Message</button>
            <div style={ {marginTop: '30px', backgroundColor: 'grey'} }>
                <form onSubmit={submitName}>
                    <input placeholder='New Name'
                        ref={nameRef}
                    />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    )
}

export default Child