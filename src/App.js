import React, { Component } from 'react';
// import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">What do you need to do?
        <div className="todo">
          <input placeholder="New Todo"></input>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
