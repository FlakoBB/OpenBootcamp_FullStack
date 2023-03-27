import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/Dashboard';

function AppRoutingFinal() {

    // ToDo: Change to valuefrom sessionStorage (or something dinamic)
    let loggedIn = true

    return (
        <Router>
            <Switch>
                {/* /// ? Redirections to protect our routes */}
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
                {/* // ? Not Found Page */}
                <Route component={ NotFoundPage }/>
            </Switch>
        </Router>
    )
}

export default AppRoutingFinal