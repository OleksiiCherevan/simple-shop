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
            <>
                <a className="header-item">{this.name}</a>
            </>
        );
    }
}

export default HeaderItem;
