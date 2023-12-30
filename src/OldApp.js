
import {  createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";

const User = createContext();
function App() {

  console.log("helle re-render");

// React useState Hook allows us to track state in a  function component
// accepts inti value  return  [current value, update function]
 const [colors,setColors] = useState("red")
//  current colors
// update function setColors


// useEffect Hook allows you to proform side effects in our components
// accepts two arguments & second arg optional
useEffect(()=>{

  console.log("hello from useEffect....");

},[colors])


  return (
    <>
    <Context.Provider value={colors}>

    
      <div className="app" style={{background:colors}}>
        <input type="text" onChange={(e)=> setColors(e.target.value)}  />
      </div>
<NavBar/>
</Context.Provider>
    </>
  );
}

export default App;




const NavBar = () => {
  const data = useContext(User)
  return (
    <div>
      <h1>

      hello this is our context Value {data}
      </h1>
    </div>
  )
}


