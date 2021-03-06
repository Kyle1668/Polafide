import React from "react";

class SearchBar extends React.Component {

    constructor() {
        super()
        this.state = {
            inputContent: ""
        }
    }

    saveInput(e) {
        const input = e.target.value;
        this.setState({inputContent: input})
        this.props.updateSearchTerm(input)
    }
    
    render() {
        return (
            <div className="search-bar">
                <div className="input-group input-group-lg">
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.props.callPlacesServices}>Go!</button>
                    </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Location" 
                        onChange={this.saveInput.bind(this)}
                    />
                </div>
            </div>
        )
    }

}

export default SearchBar;