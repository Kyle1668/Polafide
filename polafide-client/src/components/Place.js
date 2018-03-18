import React from "react";

const Place = (props) => {

    return (
        <div className="place-item">
            <div className="col-md-6">
              <div class="panel panel-info">
                <div class="panel-heading">
                    <h3>{props.name}</h3>
                </div>
                <div class="panel-body">
                    Panel content
                </div>
                <div class="panel-footer">
                    Panel footer
                </div>
              </div>
            </div>
        </div>
    )
}

export default Place;