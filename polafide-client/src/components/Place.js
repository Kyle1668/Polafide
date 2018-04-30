import React from "react";

class Place extends React.Component {

  constructor() {
    super()
    this.state = {
      placeData: props.placeObject,
      placeReview: ""
    }
  }

  getReviews() {

  }

  render() {
    return (
      <div className="place-item">
        <div className="col-md-4">
          <div className="thumbnail">
            <img src={place.image_url} alt="..." />

            <div className="caption">
              <h3>{place.name}</h3>
              <p>{place.address}</p>

              <div className="row">
                <div className="col-md-6">
                  <strong>
                    <h3>Rating: {place.rating}</h3>
                  </strong>
                </div>
                <div className="col-md-6">
                  <strong>
                    <h3>{place.is_open ? "Open Now" : "Closed"}</h3>
                  </strong>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Place;
