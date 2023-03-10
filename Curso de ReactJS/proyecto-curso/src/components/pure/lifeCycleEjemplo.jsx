/** 
 * Ejempllo de compo0nente de tipo clase
 * que sispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleEjemplo extends Component {

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente')
    }

    componentDidMount(){
        console.log('DidMount: Justo al acabar el montaje, antes de renderizar el componente')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReciveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarce
         * return true / false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarce')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarce')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleEjemplo;
