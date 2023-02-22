import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) { // props informacion que se le pasan atraves de atributos
        super(props)
        this.state = { // informacion privada para gestionarse (propiedades de la clase)
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>¡Que onda, { this.props.name }!</h1>
                <h2>Tu edad es: { this.state.age }</h2>
                <button onClick={this.birthday}>Aumentar edad</button>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => ({
            age: prevState.age + 1
        }))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
