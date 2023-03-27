import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutFAQs from './pages/about-faqs/AboutFAQs';
import ProfilePage from './pages/profile/ProfilePage';
import { TaskPage } from './pages/tasks/TaskPage';
import TaskDetails from './pages/tasks/TaskDetails';
import LoginPage from './pages/auth/LoginPage';
import StateProps from './pages/home/StateProps';


function AppRoutingOne() {
    
    let logged = true

    // ! Simulacion de lista de tareas
    const taskList = [
        {
            id: 1,
            name: 'tarea 1',
            description: 'primera tarea'
        },
        {
            id: 2,
            name: 'tarea 2',
            description: 'segunda tarea'
        }
    ]

    useEffect(() => {
        logged = localStorage.getItem('credentials')
        console.log('usuario logueado?', logged)
    }, [])
    

    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>HOME</Link>
                    <Link to='state-s'>State</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/faqs'>FAQs</Link>
                    <Link to='/task/1'>Task 1</Link>
                    <Link to='/task/2'>Task 2</Link>
                </aside>

                <main>
                    <Switch>
                        <Route exact path='/' component={ HomePage }>
                        </Route>
                        <Route path='/state-s' component={ StateProps } />
                        {/* // ? Esteblecer diferentes rutas para un mismo componente */}
                        {/* // * en el path poner entre parentesis las diferentes rutas separadas por un pipe */}
                        {/* // * path='/(ruta1|ruta2|ruta3...)' */}
                        <Route path='/(about|faqs)' component={ AboutFAQs } />
                        <Route path='/tasks' component={ TaskPage } />
                        {/* // ? Pasar props */}
                        <Route
                            exact
                            path='/task/:id'
                            render = {
                                ({ match }) => (<TaskDetails task={taskList[match.params.id-1]}/>)
                            }
                        />
                        {/* // ? Ruta con condicion (solo accede si el usuario esta loggeado) */}
                        <Route path='/profile' component={ ProfilePage }>
                            {
                                logged ?
                                <ProfilePage/> :
                                () => {
                                    alert('You must be logged')
                                    return (<Redirect to='/' />)
                                }
                            }
                        </Route>
                        <Route path='/login' component={ LoginPage }>
                            {
                                logged ?
                                () => {
                                    alert('You are logged, welcome!')
                                    return (<HomePage/>)
                                }
                                :
                                () => {
                                    return (<LoginPage/>)
                                }
                            }
                        </Route>
                        
                        {/* Dejar al final la pagina 404 - NotFoundPage */}
                        <Route component={ NotFoundPage }/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default AppRoutingOne;
