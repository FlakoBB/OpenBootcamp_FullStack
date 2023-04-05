// import logo from './logo.svg';
// Importacion de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import AxiosExample from './components/pure/AxiosExample';
// import FetchExample from './components/pure/FetchExample';
// import ObservableExamample from './components/pure/ObservableExamample';
// import AsyncExample from './components/pure/AsyncExample';
// import LoginFormik from './components/pure/forms/loginFormik';
// import Father from './components/container/father';
// import OptionalRender from './components/pure/optionalRender';
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
      {/* <OptionalRender></OptionalRender> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExamample></ObservableExamample> */}
      {/* <FetchExample/> */}
      {/* <AxiosExample/> */}
      <AxiosCRUDExample/>
    </div>
  );
}

export default App;
