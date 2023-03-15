import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class'

const NuevoContacto = ({ registrar, eliminar }) => {

    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const mailRef = useRef('')

    function registrarContacto(evento) {
        evento.preventDefault()
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            mailRef.current.value,
            false
        )
        registrar(nuevoContacto)
        nombreRef.current.value = ''
        apellidoRef.current.value = ''
        mailRef.current.value = ''
    }

    return (
        <form onSubmit={ registrarContacto }>
            <input ref={ nombreRef } placeholder='Nombre' id='inputNombre' required />
            <input ref={ apellidoRef } placeholder='Apellido' id='inputApellido' required />
            <input ref={ mailRef } placeholder='Correo' id='inputCorreo' required />
            <button type='submit' id='btnRegistrar'>Guardar</button>
        </form>
    )
}

NuevoContacto.propTypes = {
    registrar: PropTypes.func.isRequired,
}

export default NuevoContacto