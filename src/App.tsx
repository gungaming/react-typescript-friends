import React from 'react';
import logo from './logo.svg';
import './App.css';

import Board from "./Components/Board";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username"/>
        <br></br>
        <input type="password" placeholder="Password" />
        <br></br>
        <button value="submit">Submit</button>
      </form>

      <Board />
      <br></br>
      <Login />
      <br></br>
      <Landing />
      <Home />
    </div>
  );
}

export default App;
