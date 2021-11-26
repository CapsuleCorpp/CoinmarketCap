import React from "react";
import { useState } from "react";
import AppBar from "./Component/AppBar/appBar";
import Kaka from "./Component/kaka";

function App() {
  const [counter, setcounter] = useState<number>(0);
  return (
    <div className="App">
      <Kaka />
    </div>
  );
}

export default App;
