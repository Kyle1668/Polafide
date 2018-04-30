import React from "react";
import PlaceRow from "./PlaceRow";

class ResultsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.results
    };
  }

  splitPlaces() {
    const places = this.props.results;
    let placesRowsArray = [];
    let placesRow = [];

    for (let i = 0; i < places.length; i++) {
      placesRow.push(places[i]);

      if ((i + 1) % 3 === 0) {
        placesRowsArray.push(placesRow);
        placesRow = [];
      } else if (i + 1 === places.length) {
        placesRowsArray.push(placesRow);
        break;
      }
    }

    return placesRowsArray.map(places => {
      return <PlaceRow places={places} />;
    });
  }

  render() {
    return (
      <div className="results-body">
        <div className="container">{this.splitPlaces()}</div>
      </div>
    );
  }
}

export default ResultsBody;
