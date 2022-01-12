import { Component } from "react";

import "./style.scss"

class NavItem extends Component {
    constructor(props) {
        super(props);

        var { name } = props;

        this.name = name;
    }

    componentDidMount() {}

    render() {
        return (
            <>
                <a className="nav-item">{this.name}</a>
            </>
        );
    }
}

export default NavItem;
