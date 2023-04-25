import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
// import { Redirect } from 'react-router-dom'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
)

const LoginForm = ({loged, fetching, onLogin}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <Formik
                initialValues = { initialCredentials }
                // * Esquema de vaalidacion de Yup
                validationSchema={ loginSchema }
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}
            >
                {({
                    errors,
                        touched,
                        values,
                        isSubmitting,
                        handleChange,
                        handleBlur
                }) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field
                                id='email'
                                name='email'
                                placeholder='Email'
                            />

                            {/* // * email errors */}
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor='password'>Password</label>
                            <Field
                                id='password'
                                type='password'
                                name='password'
                                placeholder='Password'
                            />

                            {/* // * password errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            <button type='submit'>Login</button>
                            { fetching ? (<p>LOADING...</p>) : null }
                            { isSubmitting ? (<p>login yours credentials</p>) : null }
                        </Form>
                    )
                }
                
            </Formik>
        </div>
    )
}

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm