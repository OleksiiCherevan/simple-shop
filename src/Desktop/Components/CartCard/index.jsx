import "./style.scss";

import { Component } from "react";

import ItemAttributes from "../ItemAttributes/indes";

// Template
import ProductA from './../../../assets/images/products-photo/Product-C.png'

class CartCard extends Component {
    constructor(props) {
        super(props);
        console.log(props.product);

        this.state = {
            product: props.product,
        };
    }

    componentDidMount() {
        // this.setState({
        //     product: this.props.product
        // })
    }

    render() {
        console.log(this.props);

        return (
            <div className="cart-card">
                <div className="cart-card__info">
                    <div className="cart-card__title">
                        {this.state.product.title}
                    </div>
                    <div className="cart-card__price">
                        ${this.state.product.price}
                    </div>
                    <div
                        className="cart-card__types"
                        onChange={(event) => {
                            console.log(event.target.value);
                        }}
                    >
                        {this.state.product.types.map((type, index) => (
                            <ItemAttributes
                                key={type.title}
                                title={this.state.product.title}
                                name={type.title}
                                isActive={type.isAvaliable}
                                icon={type.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="cart-card__count-manager">
                    <div className="cart-card__square">+</div>
                    <div className="cart-card__count"></div>
                    <div className="cart-card__square">-</div>
                </div>

                <img className="cart-card__image" src={ProductA} alt={this.state.product.title}></img>
            </div>
        );
    }
}

export default CartCard;
