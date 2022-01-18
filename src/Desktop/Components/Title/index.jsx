import "./style.scss";
import { Component } from "react";

import ProductCard from "../../Components/ProductCard";

export class Title extends Component {
    render() {
        return (
            <>
                <div className="title">{this.props.children}</div>
            </>
        );
    }
}

export default Title;
