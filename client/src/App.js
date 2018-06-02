import React, { Component } from 'react';
import Customer from './components/customers/Customers'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Customer />
      </div>
    );
  }
}

export default App;
