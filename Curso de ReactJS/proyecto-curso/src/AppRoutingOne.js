// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutFAQs from './pages/about-faqs/AboutFAQs';
import ProfilePage from './pages/profile/ProfilePage';
import { TaskPage } from './pages/tasks/TaskPage';
import TaskDetails from './pages/tasks/TaskDetails';

function AppRoutingOne() {
    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/faqs'>FAQs</Link>
                </aside>

                <main>
                    <Switch>
                        <Route exact path='/' component={ HomePage } />
                        {/* // ? Esteblecer diferentes rutas para un mismo componente */}
                        {/* // * en el path poner entre parentesis las diferentes rutas separadas por un pipe */}
                        {/* // * path='/(ruta1|ruta2|ruta3...)' */}
                        <Route path='/(about|faqs)' component={ AboutFAQs } />
                        <Route path='/profile' component={ ProfilePage } />
                        <Route path='/tasks' component={ TaskPage } />
                        <Route path='/task/:id' component={ TaskDetails } />
                        
                        {/* Dejar al final la pagina 404 - NotFoundPage */}
                        <Route component={ NotFoundPage }/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default AppRoutingOne;
