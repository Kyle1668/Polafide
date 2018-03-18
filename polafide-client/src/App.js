import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./header"
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount() {

    const url = "http://localhost:5000/api/places?loc=\"Santa Rosa\"";
    
    fetch(url)
      .then(response => response.json())
      .then(json => {
        
        const results = json.results.map(place => {
          return <li>{place.name}</li>
        })

        this.setState({
          results: results
        });

      });
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.results} */}
        <Header/>
      </div>
    );
  }
}

export default App;
