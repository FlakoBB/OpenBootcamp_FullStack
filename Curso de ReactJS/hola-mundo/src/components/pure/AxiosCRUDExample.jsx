import React from 'react'
import { createUser, deleteUser, getAllUsers, getPagedUsers, getUserByID, login, updateUser } from '../../services/axiosCRUDService'
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

const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token) {
                    alert(JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login don'))
    }

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const obtainPagedUsers = (page) => {
        getPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const newUSer = (name, job) => {
        createUser(name, job)
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const updateUsers = (id, name, job) => {
        updateUser(id, name, job)
        .then((response) => {
            alert(JSON.stringify(response.data))
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }

    const deleteUsers = (id) => {
        deleteUser(id)
            .then(() => {
                alert('User Deleted')
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    return (
        <div>
            <Formik
                initialValues = { initialCredentials }
                // * Esquema de vaalidacion de Yup
                validationSchema={ loginSchema }
                onSubmit={async (values) => {
                    authUser(values)
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
            {/* <button onClick={ authUser }>Login</button> */}
            {/* Botones ejemplo (CRUD) */}
            <button onClick={ () => obtainAllUsers() }>All Users</button>
            <button onClick={ () => obtainPagedUsers(2) }>Paged Users</button>
            <button onClick={ () => obtainUserByID(3) }>User By ID</button>
            <button onClick={ () => newUSer('Flako', 'Developer') }>Create User</button>
            <button onClick={ () => updateUsers(4,'FlakoBB', 'Web Developer') }>Update User</button>
            <button onClick={ () => deleteUsers(2) }>Delete User</button>
        </div>
    )
}

export default AxiosCRUDExample