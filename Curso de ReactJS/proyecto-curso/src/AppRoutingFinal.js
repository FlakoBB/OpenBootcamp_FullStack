import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/Dashboard';
import { TaskPage } from './pages/tasks/TaskPage';

function AppRoutingFinal() {

    // ToDo: Change to valuefrom sessionStorage (or something dinamic)
    let loggedIn = true

    return (
        <Router>
            <Switch>
                {/* // ? Redirections to protect our routes */}
                <Route exact path='/'>
                    {
                        loggedIn ?
                        (<Redirect from='/' to='/dashboard'/>)
                        :
                        (<Redirect from='/' to='/login' />)
                    }
                </Route>
                {/* // ? Login route */}
                <Route exact path='/login' component={ LoginPage } />
                {/* // ? Dashboard route */}
                <Route exact path='/dashboard'>
                    {
                        loggedIn ?
                        (<DashboardPage/>)
                        :
                        (<Redirect from='/' to='/login' />)
                    }
                </Route>
                {/* // ! Ejercicio 6 */}
                {/* // ? Register route */}
                <Route exact path='/register' component={ RegisterPage } />
                {/* // ? Tasks route */}
                <Route exact path='/tasks'>
                    {
                        loggedIn ?
                        (<TaskPage/>)
                        :
                        (<Redirect from='/' to='/login' />)
                    }
                </Route>
                {/* // ! Fin Ejercicio 6 */}
                {/* // ? Not Found Page */}
                <Route component={ NotFoundPage }/>
            </Switch>
        </Router>
    )
}

export default AppRoutingFinal