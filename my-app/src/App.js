import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateReactComponent } from "./home-task-1/create-react-component";
import { CreateReactPureComponent } from "./home-task-1/create-pure-react-component";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from Function Component</p>
        <p><CreateReactComponent /></p>
        <p><CreateReactPureComponent /></p>

      </header>
    </div>
  );
}

export default App;
