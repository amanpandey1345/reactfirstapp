import { useState } from "react";
import "./App.css";
import Nav from "./Nav";



function App() {

  // console.log("helle re-render");

  const [colors, setColors] = useState("")


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
