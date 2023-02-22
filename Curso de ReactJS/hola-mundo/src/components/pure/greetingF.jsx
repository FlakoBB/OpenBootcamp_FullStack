import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // useState
    // const [variable, metodo] = useState(valorInicial)
    const [age, setage] = useState(23);

    const birthday = () => {
        setage(age + 1);
    }
    return (
        <div>
            <h1>¡Que onda, { props.name }! Desde un componente funcional.</h1>
            <h2>Tu edad es: { age }</h2>
            <button onClick={birthday}>Aumentar edad</button>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
