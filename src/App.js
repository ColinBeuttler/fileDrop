import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Fileselector from './Fileselector'
import Listfile from './Listfiles';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome To Filedrop
         
        </p>

        <Fileselector />

        {/* <Listfile /> */}
      
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
