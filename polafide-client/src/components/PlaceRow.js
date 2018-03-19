import React from "react";
import Place from "./Place";

const PlaceRow = (props) => {
    console.log("inside", props.places)
    return (
        <div className="row places-row">
            {props.places.map(place => {
                // return <Place key={place.place_id} name={place.name} address={place.address}/>
                return <Place key={place.place_id} placeObject={place}/>
            })}
        </div>
    )
}

export default PlaceRow;