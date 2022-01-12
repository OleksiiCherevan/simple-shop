import { Component } from "react";

class Layout extends Component {
    constructor(props) {
        super(props)
        this.x = props.x;
        this.y = props.y;
    }

    render() {
        return <div style={{ width: this.x, height: this.y }}></div>;
    }
}

export default Layout
