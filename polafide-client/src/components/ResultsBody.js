import React from "react";
import PlaceRow from "./PlaceRow";

class ResultsBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            places: this.props.results
        }
    }

    render() {   
        console.log("this.state.results: ", this.state.places)

        return (
            <div className="results-body">
                <div className="container">
                    <PlaceRow places={this.props.results}/>
                    {/* <PlaceRow names={["place 3", "place 4"]}/>
                    <PlaceRow names={["place 5", "place 6"]}/> */}
                </div>
            </div>
        )
    }

}

export default ResultsBody;