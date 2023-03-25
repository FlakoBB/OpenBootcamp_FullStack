import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoCA from '../pure/contacto';
import NewContactFormik from '../pure/forms/newContactFormik';
import NuevoContacto from '../pure/forms/nuevoContacto';

const ContactoMuestra = () => {

    const defaultContacto = new Contacto('nombre', 'apellido', 'email@hola.com', false)

    const [contactos, setContactos] = useState([defaultContacto])


    function agregarContacto(contacto) {
        const tempContactos = [...contactos]
        tempContactos.push(contacto)
        setContactos(tempContactos)
    }

    function eliminarContacto(contacto) {
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos.splice(index, 1)
        setContactos(tempContactos)
    }

    function disponibilidadContacto(contacto) {
        const index = contactos.indexOf(contacto)
        const tempContactos = [...contactos]
        tempContactos[index].conectado = ! tempContactos[index].conectado
        setContactos(tempContactos)
    }

    return (
        <div>
            <h1>Lista de Contactos:</h1>
            <NuevoContacto
                registrar={ agregarContacto }
            ></NuevoContacto>
            <NewContactFormik
                registrar={ agregarContacto }
            />
            <ul>
                {
                    contactos.map((contacto, index) => {
                        return (
                            <ContactoCA
                                key={ index }
                                contacto={ contacto }
                                eliminar={ eliminarContacto }
                                conexion={ disponibilidadContacto }
                            ></ContactoCA>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ContactoMuestra;
