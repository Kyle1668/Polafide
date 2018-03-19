import React from "react";
import Place from "./Place";

const PlaceRow = (props) => {
    return (
        <div className="row places-row">
            
            <Place  name={props.names[1]}/>
            <Place  name={props.names[1]}/>   
            <Place  name={props.names[1]}/>   
            
            {/* {props.places.map(place => {
                return <Place name={place.name}/>
            })}      */}
        </div>
    )
}

export default PlaceRow;