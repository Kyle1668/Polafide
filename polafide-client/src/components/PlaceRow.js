import React from "react";
import Place from "./Place";

const PlaceRow = (props) => {

    return (
        <div className="row">
            <Place name={props.names[0]}/>
            <Place  name={props.names[1]}/>
        </div>
    )
}

export default PlaceRow;