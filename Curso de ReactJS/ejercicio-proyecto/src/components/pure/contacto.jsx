import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoCA = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h2>Apellido: { contacto.apellido }</h2>
            <h3>E-mail: { contacto.email }</h3>
            <h3>Conectado: { contacto.conectado ? 'En Línea' : 'No Disponible' }</h3>
        </div>
    );
};


ContactoCA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoCA;
