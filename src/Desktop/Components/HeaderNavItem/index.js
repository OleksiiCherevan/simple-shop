import { Component } from "react";

import "./style.scss"

class HeaderItem extends Component {
    constructor(props) {
        super(props);

        var { name } = props;

        this.name = name;
    }

    componentDidMount() {}

    render() {
        return (
                <div className="header-nav-item">{this.name}</div>
        );
    }
}

export default HeaderItem;
