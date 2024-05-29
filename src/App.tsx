import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function SchoolCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount((cur_count) => cur_count + 1)}>증가</button>
      <button onClick={()=> setCount((cur_count) => cur_count - 1)}>감소</button>
      {count!=0 ? <button onClick={()=> setCount(0)}>초기화</button> : null}
    </div>
  );
}


function App() {
  const schools = ["경기고","성수고","창동고","성신여고","양명여고"];


  return (
  <div>
    {schools.map((학교) => (<div>
      <h2>{학교}</h2>
      <SchoolCounter/>
      </div>))}
  </div>
  )
}
export default App;
