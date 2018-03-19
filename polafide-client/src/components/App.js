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
    console.log(input)
    if (input !== "") {
      this.setState({searchTerm: input});
    }
  }

  callPlacesServices() {
    
    const input = this.state.searchTerm;
    
    console.log("callPlacesServices")
    console.log("input: ", input + " |")

    if (input != "") {
      console.log("state input: ", input)

      const url = "http://localhost:5000/api/places?loc=\"\"" + input + "\"";

      fetch(url)
        .then(response => response.json())
        .then(json => {

          const results = json
            .results
            .map(place => {
              return <li>{place.name}</li>
            })

          this.setState({inputContent: results});

          this.props.resultsMethod

        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          updateSearchTerm={this.updateSearchTerm.bind(this)}
          callPlacesServices={this.callPlacesServices.bind(this)}/>
        <ResultsBody/>
      </div>
    );
  }
}

export default App;
