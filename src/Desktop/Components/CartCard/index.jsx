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

const MAX_COUNT = 99;

const CartCard = (props) => {
    const { product, index, parent } = props
    const { name, prices, title, count } = { ...product }; 
    const { currencyIndex } = useSelector(state => state.currencyIndex)   
    const dispacth = useDispatch();


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
        let value = event.target.value

        value = (value - 1 > 0) ? value : 1;
        value = (value - (-1) <= MAX_COUNT) ? value : MAX_COUNT;
        
        setStoreProductCount(product, value) 
    };

    
    return (
        <div className="cart-card">
            <div className="cart-card__info">
                <div className="cart-card__title">{name}</div>
                <div className="cart-card__price">
                    {" "}
                    {`${prices[currencyIndex].currency.symbol} ${(product.prices[currencyIndex].amount * count).toFixed(2)}`}
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
