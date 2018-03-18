import React from "react";

class SearchBar extends React.Component {

    constructor() {
        super()
        this.state = {
            inputContent: ""
        }
    }

    render() {
        return (
            <div className="search-bar">
                <div class="input-group input-group-lg">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                    </span>
                    <input type="text" class="form-control" placeholder="Enter Location"/>
                </div>
            </div>
        )
    }

}

export default SearchBar;