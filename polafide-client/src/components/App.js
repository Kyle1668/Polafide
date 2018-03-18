import React, { Component } from 'react';
import Header from "./Header"
import ResultsBody from "./ResultsBody";

import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import '../stylesheets/Header.css';
import '../stylesheets/SearchBar.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  // componentDidMount() {

  //   const url = "http://localhost:5000/api/places?loc=\"Santa Rosa\"";
    
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => {
        
  //       const results = json.results.map(place => {
  //         return <li>{place.name}</li>
  //       })

  //       this.setState({
  //         results: results
  //       });

  //     });
  // }

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
