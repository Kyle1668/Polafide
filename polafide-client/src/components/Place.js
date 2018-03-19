import React from "react";

const Place = (props) => {
    return (
        <div className="place-item">        
            <div className="col-md-4">
                <div class="thumbnail">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipNqRXhgwwip6sN11o_cS3AIj-WXsp9gGasPXTmk=s1600-w1000" alt="..."/>
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
                    <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place;