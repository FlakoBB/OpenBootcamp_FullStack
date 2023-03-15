import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoCA = ({ contacto, eliminar, conexion }) => {
    return (
        <li style={ {listStyle: 'none'} }>
            <div>
                <h3>{ contacto.nombre } { contacto.apellido }</h3>
                <p><b>E-mail:</b> { contacto.email }</p>
                <p><b>Conectado:</b> { contacto.conectado ? 'En Línea' : 'No Disponible' }</p>
            </div>
            <div>
                <button onClick={ () => conexion(contacto) }>Con</button>
                <button onClick={ () => eliminar(contacto) }>borrar</button>
            </div>
        </li>
    );
};


ContactoCA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    eliminar: PropTypes.func.isRequired,
    conexion: PropTypes.func.isRequired
};


export default ContactoCA;
