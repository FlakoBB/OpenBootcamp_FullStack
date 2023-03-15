import logo from './logo.svg';
import './App.css';
import ContactoMuestra from './components/container/contacto_muestra';
// import Clock from './hooks/lifeCycleClass';
// import ClockFunction from './hooks/lifeCycleFunc';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <ContactoMuestra></ContactoMuestra>
        {/* <Clock></Clock> */}
        {/* <ClockFunction></ClockFunction> */}
      {/* </header> */}
    </div>
  );
}

export default App;
