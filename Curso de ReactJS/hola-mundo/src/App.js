// import logo from './logo.svg';
// Importacion de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
// import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
// import GreetingStyled from './components/pure/greetingStyled';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingF'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="FlakoBB"></Greeting> */}
        {/* <GreetingF name="FlakoBB"></GreetingF> */}
        {/* <GreetingStyled name='Flako' /> */}
        {/* <Father></Father> */}
      {/* </header> */}
      <OptionalRender></OptionalRender>
    </div>
  );
}

export default App;
