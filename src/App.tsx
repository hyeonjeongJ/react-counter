import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount((cur_count) => cur_count + 1)}>증가</button>
    </div>
  );
}

export default App;
