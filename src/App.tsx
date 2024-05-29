import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function SchoolCounter({schoolName}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{schoolName}</h2>
      <h1>{count}</h1>
      <button onClick={()=> setCount((cur_count) => cur_count + 1)}>증가</button>
      <button onClick={()=> setCount((cur_count) => cur_count - 1)}>감소</button>
      {count!=0 ? <button onClick={()=> setCount(0)}>초기화</button> : null}
    </div>
  );
}

function App() {
  return (
    <div>
      <SchoolCounter schoolName="A 학교" />
      <SchoolCounter schoolName="B 학교" />
      <SchoolCounter schoolName="C 학교" />
    </div>
  );
}

export default App;