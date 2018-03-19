import React from "react";

const Place = (props) => {

    return (
        <div className="place-item">        
            <div className="col-md-4">
                <div class="thumbnail">
                    <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=CmRaAAAAnQo_1hj2siwdToAgdWnvPSBGIM13vDA7w_gtplGVEOYR3uZMXsoW0JMhMhuOwx-IqdRn-QW4QfSnPaUQy7t5GLQvVJoiJMQ7rAiJlIbtNTpYD5WKh4MNAiqB3Nu-JPw4EhBHH3vMdJLXdWQv0Lo6zG8QGhQvLLwotEGXPM2OSh25HX4IwKBczg&key=AIzaSyC_KZyErDtZ42CuFscO2l5YseWaV8MCHrQ" alt="..."/>
                    <div class="caption">
                    <h3>{props.name}</h3>
                    <p>1899 Mendocino Ave, Santa Rosa, CA 95401, USA</p>

                    <div className="row">
                        <div className="col-md-6">
                            <strong><h3>Rating: 4.5</h3></strong>
                        </div>
                        <div className="col-md-6">
                            <strong><h3>Closed</h3></strong>
                        </div>
                    </div>

                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place;