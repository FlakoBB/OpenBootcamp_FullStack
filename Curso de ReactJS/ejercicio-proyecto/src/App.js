import logo from './logo.svg';
import './App.css';
import ContactoMuestra from './components/container/contacto_muestra';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoMuestra></ContactoMuestra>
      </header>
    </div>
  );
}

export default App;
