import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementHandler() {
    setCounter(counter + 1);
  }

  function decrementHandler() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="counterValue">{counter}</div>
      <div className="btns">
        <button className="increment" onClick={incrementHandler}>
          Increment
        </button>
        <button className="decrement" onClick={decrementHandler}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
