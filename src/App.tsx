import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState<number>(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {counter}
        </a>
        <button
          data-testid="test"
          onClick={() => setcounter((prev) => prev + 1)}
        ></button>
      </header>
    </div>
  );
}

export default App;
