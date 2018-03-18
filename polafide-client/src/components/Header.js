import React from "react";

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            headerText: "Polafide",
            subHeading: "Find Vegetarian Eats"
        }
    }

    render() {
        return (
            <div className = "header">
                <div class= "jumbotron">
                    <div className = "header-content">
                        <h1>{this.state.headerText}</h1>
                        <p>{this.state.subHeading}</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;