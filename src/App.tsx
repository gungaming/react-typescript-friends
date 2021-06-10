import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
