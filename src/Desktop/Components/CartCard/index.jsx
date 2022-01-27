import "./style.scss";

import { Component, useEffect } from "react";

import ItemAttributes from "../ItemAttributes";

import { increseProductCount, decreaseProductCount, setProducts } from "../../../store/productBagSlice";
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

const CartCard = ({product, index}) => {
    const {name, prices, title, currencyIndex} = {...product}

    const [count, setCount] = useState(1)

    const products = useSelector(state => state.productBag.products);

    const dispacth = useDispatch()

    useEffect((products = []  ) => { 
        // let {...foundProduct} = {...products.find(prod => prod === product)}
        // foundProduct.count = foundProduct.count + 1

        // let newProducts = [
        //     ...products,
        //     foundProduct
        // ]

        // dispacth(setProducts({
        //     products: newProducts
        // }))
    }, [count]);

    const onIncreseCount = () => {
        let value = count ;
        value = value+1 <= 99 ? value+1 : 99;

        setCount(value)

        // dispacth(increseProductCount({
        //     product
        // }))
    };

    const onDecreaseCount = () => {
        let value = count ;
        value = value-1 > 0 ? value-1 : 1;
        
        setCount(value)
        // dispacth(decreaseProductCount({
        //     product
        // }))
    }

    const onCountChange = (event) => {
        let value = event.target.value;
        value = value > 0 ? value : 1;
        value = value <= 99 ? value : 99;
        setCount(value)
    };

    return (
        <div className="cart-card">
            <div className="cart-card__info">
                <div className="cart-card__title">{name}</div>
                <div className="cart-card__price">
                    {" "}
                    {`${
                        prices[currencyIndex].currency
                            .symbol
                    } ${prices[currencyIndex].amount}`}
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
                src={ProductA}
                alt={title}
            ></img>
        </div>
    );
};

export default CartCard;
