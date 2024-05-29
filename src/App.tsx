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
  const schools = [];

  for (let i = 0; i < 1000; i++) {
    schools.push(<SchoolCounter schoolName={`학교 ${i}`} key={i}/>);
  }

  return <div>{schools}</div>;
}
export default App;