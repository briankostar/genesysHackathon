import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Columns } from 'react-bulma-components';
// import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav'
import ModuleLoader from './components/ModuleLoader'
// const customHistory = createBrowserHistory()
// import { Router } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <ModuleLoader />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
