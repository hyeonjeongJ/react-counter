import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];

  const 리턴값_감소 = useState(0);
  const count_dec = 리턴값_감소[0];
  const setCount_dec = 리턴값_감소[1];



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount((cur_count) => cur_count + 1)}>증가</button>
      <h1>{count_dec}</h1>
      <button onClick={()=> setCount_dec((cur_count) => cur_count - 1)}>감소</button>     
    </div>
  );
}

export default App;
