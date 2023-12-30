import React, {  useContext, useEffect, useState } from "react";
import "./App.css";
import DataContext from "./store";


const Count = () => {
  const d = useContext(DataContext)
  const [value, setvalue] = useState(0);
  const [value1, setValue1] = useState(0);

  useEffect(() => {
    setValue1(value ** 2);
  }, [value]);


  

  useEffect(() => {


    if(value !== 0 ){

        console.log("hello useEffect 2");
    }
  }, [value]);





  return (
    <div>
      <h1>

    count components context value :{d}
      </h1>
      <h1>Number:- {value}</h1>
      <h1>Square:- {value1}</h1>
      <button onClick={() => setvalue(value + 1)}>+</button>
      <button onClick={() => setvalue(value - 1)}>-</button>
    </div>
  );
};

export default Count;
