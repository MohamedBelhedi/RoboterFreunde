import React, { Component } from 'react'

import logo from './kaffe.svg';
import './App.css';

class App extends Component {
  render(){
  return (
    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="f1  App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          greeting={'hier'+'lernen'}
        >
          Learn React
        </a>
        <p>{this.props.greeting}</p>
      </header>
    </div>
    
  );
  
}
}

export default App;
