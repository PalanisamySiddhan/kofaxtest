import React from 'react';
import './App.css';
import { Capture } from './Capture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Welcome to Usbank Sangeetha
      </header>
      <br/>
      <button onClick={Capture}>Click to launch</button>
      <div id="ID_CAMERA_DIV"></div>
      <input type="file" id="take-picture" accept="image/jpeg"/>
    </div>
  );
}

export default App;
