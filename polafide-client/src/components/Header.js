import React from "react";
import SearchBar from "./SearchBar";

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            headerText: "Polafide",
            subHeading: "Find Vegetarian Eats",
            leafIcon: <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span>
        }
    }

    getResults() {
        this.setState({
            headerText: "_"
        })
    }

    render() {
        return (
            <div className="header">
                <div className="jumbotron">
                    <div className="header-content">
                        <h1>{this.state.headerText} </h1>
                        <p>{this.state.subHeading} {this.state.leafIcon}</p>
                        <SearchBar updateSearchTerm={this.props.updateSearchTerm} callPlacesServices={this.props.callPlacesServices}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;