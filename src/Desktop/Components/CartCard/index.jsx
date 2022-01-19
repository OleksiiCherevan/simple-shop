import "./style.scss";

import { Component } from "react";

import ItemAttributes from "../ItemAttributes/indes";

// Template
import ProductA from './../../../assets/images/product-images/Product-C.png'

class CartCard extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            title: "Title",
            price: 0,
            attributes: ['M', 'L'],
        };
    }

    componentDidMount() {
       this.setState({
           product: this.props.product
       })
    }

    render() {
        

        return (
            <div className="cart-card">
                <div className="cart-card__info">
                    <div className="cart-card__title">
                        {this.state.title}
                    </div>
                    <div className="cart-card__price">
                        ${this.state.price}
                    </div>
                    <div
                        className="cart-card__attributes"
                        onChange={(event) => {
                            
                        }}
                    >
                        {this.state.attributes.map((type, index) => (
                            <ItemAttributes
                                key={type.title}
                                title={this.state.title}
                                name={type.title}
                                isActive={type.isAvaliable}
                                icon={type.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="cart-card__count-manager">
                    <div className="cart-card__square">+</div>
                    <div className="cart-card__count">4</div>
                    <div className="cart-card__square">-</div>
                </div>

                <img className="cart-card__image" src={ProductA} alt={this.state.title}></img>
            </div>
        );
    }
}

export default CartCard;
