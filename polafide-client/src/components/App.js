import React, { Component } from 'react';
import Header from "./Header"
import ResultsBody from "./ResultsBody";

import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import '../stylesheets/Header.css';
import '../stylesheets/SearchBar.css';
import '../stylesheets/ResultsBody.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ResultsBody/>
      </div>
    );
  }
}

export default App;
