import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    // const history = useHistory()

    return (
        <div>
            <Formik
                initialValues = { initialCredentials }
                // * Esquema de vaalidacion de Yup
                validationSchema={ loginSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // * Guardamos los datos en localstorage
                    localStorage.setItem('credentials', values)
                    // history.push('/profile')
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
                            { isSubmitting ? (<p>login yours credentials</p>) : null }
                        </Form>
                    )
                }
                
            </Formik>
        </div>
    )
}

export default LoginFormik