import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Count from './Count';
import Blog from './Blog';
import Hellocomp from './Hellocomp';
import ComForm from './ComForm';
import ComEvent from './ComEvent';
import ComList from './ComList';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    {/* <App /> */}
    {/* <Count/> */}
    {/* <Blog/> */}
    {/* <Hellocomp/> */}
    {/* <ComForm /> */}
    {/* <ComEvent/> */}
    <ComList />

  </React.StrictMode>
);


