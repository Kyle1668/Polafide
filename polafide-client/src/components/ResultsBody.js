import React from "react";
import PlaceRow from "./PlaceRow";

class ResultsBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            places: []
        }
    }

    render() {
        return (
            <div className="results-body">
                <div className="container">
                    <PlaceRow names={["place 1", "place 2"]}/>
                    <PlaceRow names={["place 3", "place 4"]}/>
                    <PlaceRow names={["place 5", "place 6"]}/>
                </div>
            </div>
        )
    }

}

export default ResultsBody;