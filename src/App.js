
import {  useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";



function App() {

  console.log("helle re-render");

// React useState Hook allows us to track state in a  function component
// accepts inti value  return  [current value, update function]
 const [colors,setColors] = useState("")
//  current colors
// update function setColors


// useEffect Hook allows you to proform side effects in our components
// accepts two arguments & second arg optional
useEffect(()=>{

  console.log("hello from useEffect....");

},[colors])


  return (
    <>
      <div className="app" style={{background:colors}}>
        <input type="color" onChange={(e)=> setColors(e.target.value)}  />
      </div>
<Nav/>
    </>
  );
}

export default App;
