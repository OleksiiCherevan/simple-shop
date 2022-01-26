import "./style.scss";

import { Component } from "react";

import ItemAttributes from "../ItemAttributes";

// Template
import ProductA from "./../../../assets/images/product-images/Product-C.png";

class CartCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: this.props.product,
            ...this.props.product,
        };
    }

    render() {
        console.log(" ");
        console.log(this.state.product);
        return (
            <div className="cart-card">
                <div className="cart-card__info">
                    <div className="cart-card__title">{this.state.name}</div>
                    <div className="cart-card__price">
                        {" "}
                        {`${
                            this.state.prices[this.state.currencyIndex].currency
                                .symbol
                        } ${
                            this.state.prices[this.state.currencyIndex].amount
                        }`}
                    </div>

                    <div className="cart-card__attributes-wrapper">
                        <ItemAttributes
                            product={this.state.product}
                        ></ItemAttributes>
                    </div>
                </div>

                <div className="cart-card__count-manager">
                    <div className="cart-card__square">+</div>
                    <div className="cart-card__count">4</div>
                    <div className="cart-card__square">-</div>
                </div>

                <img
                    className="cart-card__image"
                    src={ProductA}
                    alt={this.state.title}
                ></img>
            </div>
        );
    }
}

export default CartCard;
