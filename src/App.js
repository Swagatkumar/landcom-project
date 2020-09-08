import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard.js'

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="dashboard.html"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>

      //   </header>
      // </div>

      <Dashboard />
    );
  }
}

export default App;
