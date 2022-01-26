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
            index: this.props.index,
            count: 1,            
        };
    }

    onIncreseCount(count = 1) {
        count = this.state.count +   count
        count = count <= 99 ? count : 99
        this.setState({
            count: count
        })
    }

    onDecreaseCount(count = 1) {
        count = this.state.count-count
        count = count > 0 ? count : 1;
        this.setState({
            count:  count
        })
    }

    onCountChange(event) {
        let count = event.target.value
        count = count > 0 ? count : 1;
        count = count <= 99 ? count : 99
        this.setState({
            count: count
        })
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
                            parent={'cart'}
                            index={this.state.index}
                        ></ItemAttributes>
                    </div>
                </div>

                <div className="cart-card__count-manager">
                    <div className="cart-card__square" onClick={() => this.onIncreseCount()}>+</div>
                    <input className="cart-card__count" type='text' value={this.state.count} onChange={(event) => this.onCountChange(event)}></input>
                    <div className="cart-card__square" onClick={() => this.onDecreaseCount()}>-</div>
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
