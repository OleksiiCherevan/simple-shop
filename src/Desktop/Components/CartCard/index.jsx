import "./style.scss"

import { Component } from 'react'

class CartCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="cart-card">
                <div className="cart-card__info">
                    <div className="cart-card__title">Apollo Running Short</div>
                    <div className="cart-card__price">$50.00</div>
                    <div className="cart-card__types"></div>
                </div>
                <div className="cart-card__count-manager">
                    <div className="cart-card__square"></div>
                    <div className="cart-card__count"></div>
                    <div className="cart-card__square"></div>
                </div>
                <div className="cart-card__image"></div>
            </div>
        )
    }
}

export default CartCard