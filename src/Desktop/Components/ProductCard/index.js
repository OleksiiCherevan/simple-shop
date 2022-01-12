import "./style.scss";

import { Component } from "react";

import Layout from "../Layot";

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card-desktop">
                <img className="product-card-desktop__image" src="https://png2svg.com/images/png2svg/logo.svg"></img>

                <Layout y={24} x={24}/>

                <div className="product-card-desktop__content">
                    <div className="product-card-desktop__title">Apollo Running Short</div>

                    <div className="product-card-desktop__price">$ 50.00</div>
                </div>
            </div>
        );
    }
}

export default ProductCard
