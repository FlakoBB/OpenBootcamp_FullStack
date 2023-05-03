import "./App.css";
import LoginUseReducer from "./components/LoginUseReducer";
// import LoginUseState from "./components/LoginUseState";
// import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>useReducer Example</h1>
                {/* <Counter/> */}
                {/* <LoginUseState/> */}
                <LoginUseReducer/>
            </header>
        </div>
    );
}

export default App;
