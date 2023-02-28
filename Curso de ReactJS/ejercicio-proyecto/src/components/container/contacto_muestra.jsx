import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoCA from '../pure/contacto';

const ContactoMuestra = () => {

    const defaultContacto = new Contacto('Desconocido', '----------', '----------', false)

    return (
        <div>
            <h1>Lista de Contactos:</h1>
            <ContactoCA contacto={ defaultContacto }></ContactoCA>
        </div>
    );
}

export default ContactoMuestra;
