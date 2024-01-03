import React, { useState } from "react";
import "./App.css";
const Hellocomp = () => {

    
  return (
    <>
      <div className="m1">
        {!show ? (
          <div className="card1">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="button" onClick={() => setShow(true)}>
              Submit
            </button>
          </div>
        ) : (
          <div className="card1">
            <h1>Hello {value}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Hellocomp;
