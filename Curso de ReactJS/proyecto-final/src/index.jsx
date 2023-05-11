//* Imports React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//* Imports ReactRedux
// import { Provider } from 'react-redux'

//* Importar las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

//* Si se esta trabajando con Redux, crear el Store y aplicar el midelware de Redux Saga

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root'),
);
