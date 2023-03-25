import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Contacto } from '../../../models/contacto.class'

const NewContactFormik = ({ registrar }) => {

    const valoresIniciales = {
        nombre: '',
        apellido: '',
        email: '',
        conectado: false
    }

    const contactoSchema = Yup.object().shape(
        {
            nombre: Yup.string()
                .required('El nombre es requerido'),
            apellido: Yup.string(),
            email: Yup.string()
                .email('Formato de email incorrecto')
        }
    )

    function registrarContact(contacto) {
        const nuevoContacto = new Contacto(
            contacto.nombre,
            contacto.apellido,
            contacto.email,
            contacto.conectado
        )

        registrar(nuevoContacto)
    }

    return (
        <div>
            <Formik
                initialValues={ valoresIniciales }
                validationSchema={ contactoSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    registrarContact(values)
                }}
            >
                {
                    ({
                        errors,
                        touched,
                        isSubmitting
                    }) => (
                        <Form>
                            <Field
                                id='nombre'
                                type='text'
                                name='nombre'
                                placeholder='Nombre'
                            />
                            {
                                errors.nombre && touched.nombre &&
                                (
                                    <ErrorMessage name='nombre' component='span' />
                                )
                            }

                            <Field
                                id='apellido'
                                type='text'
                                name='apellido'
                                placeholder='Apellido'
                            />
                            {
                                errors.apellido && touched.apellido &&
                                (
                                    <ErrorMessage name='apellido' component='span' />
                                )
                            }

                            <Field
                                id='email'
                                type='email'
                                name='email'
                                placeholder='ejemplo@email.com'
                            />
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='span' />
                                )
                            }

                            <button type='submit'>Guardar Contacto</button>
                            { isSubmitting ? (<p>Guardando contacto...</p>) : null }
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

NewContactFormik.propTypes = {
    registrar: PropTypes.func.isRequired
}

export default NewContactFormik