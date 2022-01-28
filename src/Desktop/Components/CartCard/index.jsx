import "./style.scss";

import { Component, useEffect } from "react";

import ItemAttributes from "../ItemAttributes";

import {
    increseProductCount,
    decreaseProductCount,
    setProducts,
    removeProduct,
    setProductCount,
    increaseProductCount,
} from "../../../store/productBagSlice";
import ProductA from "./../../../assets/images/product-images/Product-C.png";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";

// class CartCard extends Component {
//     constructor(props) {
//         super(props);

//         state = {
//             product: props.product,
//             ...props.product,
//             index: props.index,
//             count: 1,
//         };
//     }

const CartCard = ({ product, index }) => {
    const dispacth = useDispatch();
    const { name, prices, title, count } = { ...product }; 
    const { currencyIndex } = useSelector(state => state.currencyIndex)   
    // const { products } = useSelector((state) => state.productBag);

    const setStoreProductCount = (product, count) => {
        dispacth(
            setProductCount({
                product,
                count,
            })
        );
    };

    const onIncreseCount = () => {
      dispacth(increaseProductCount({
          product
      }))
    };

    const onDecreaseCount = () => {
        dispacth(decreaseProductCount({
            product
        }))
    };

    const onCountChange = (event) => {
        setStoreProductCount(product, event.target.value) 
    };

    const getTotalCardPrice = () => {
        let totalPrice = product.prices[currencyIndex].amount * count
            return totalPrice.toFixed(2)
    }

    return (
        <div className="cart-card">
            <div className="cart-card__info">
                <div className="cart-card__title">{name}</div>
                <div className="cart-card__price">
                    {" "}
                    {`${prices[currencyIndex].currency.symbol} ${getTotalCardPrice()}`}
                </div>

                <div className="cart-card__attributes-wrapper">
                    <ItemAttributes
                        product={product}
                        parent={"cart"}
                        index={index}
                    ></ItemAttributes>
                </div>
            </div>

            <div className="cart-card__count-manager">
                <div
                    className="cart-card__square"
                    onClick={() => onIncreseCount()}
                >
                    +
                </div>
                <input
                    className="cart-card__count"
                    type="text"
                    value={count}
                    onChange={(event) => onCountChange(event)}
                ></input>
                <div
                    className="cart-card__square"
                    onClick={() => onDecreaseCount()}
                >
                    -
                </div>
            </div>

            <img
                className="cart-card__image"
                src={product.gallery[0]}
                alt={title}
            ></img>
        </div>
    );
};

export default CartCard;
