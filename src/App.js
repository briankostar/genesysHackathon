import React, { Component } from 'react';
import { Columns } from 'react-bulma-components';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav'
import { ModuleLoader } from './components/ModuleLoader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <ModuleLoader />
      </div>
    );
  }
}

export default App;
