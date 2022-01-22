import { Component } from "react";

import "./style.scss"

// checked
class HeaderItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        }
    }

    render() {
        return (
                <div className="header-nav-item">{this.state.name}</div>
        );
    }
}

export default HeaderItem;
