import React, {Component} from 'react';
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
      searchTerm: "",
      results: []
    }
  }

  updateSearchTerm(input) {
    if (input !== "") {
      this.setState({searchTerm: input});
    }
  }

  callPlacesServices() {
    
    const input = this.state.searchTerm;

    if (input != "") {
      
      const url = "https://polafide-search-api.herokuapp.com/api/places?loc=\"" + input + "\"";

      console.log("state input:", input)
      console.log(url)

      fetch(url)
        .then(response => response.json())
        .then(json => {

          const results = json.results.map(place => {
              return <li>{place.name}</li>
          });

          this.setState({results: json.results});
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          updateSearchTerm={this.updateSearchTerm.bind(this)}
          callPlacesServices={this.callPlacesServices.bind(this)}/>
        <ResultsBody results={this.state.results}/>
      </div>
    );
  }
}

export default App;
