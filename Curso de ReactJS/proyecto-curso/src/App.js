// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import RegisterFormik from './components/pure/forms/registerFormik';
// import Ejemplo4 from './hooks/ejemplo4';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import TaskListComponent from './components/container/task_list';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <RegisterFormik></RegisterFormik>
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Flako'>
        Todo lo que hay aqui sera tratado como un props.children
          <h3>Contenido del props.chldren</h3>
          <p>Hola Mundo</p>
        </Ejemplo4> */}
      {/* </header> */}
    </div>
  );
}

export default App;
