import React from "React";

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
            <div class="jumbotron">
                <h1>{this.state.headerText}</h1>
                <p>{this.state.subHeading}</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </div>
        )
    }
}

export default Header;