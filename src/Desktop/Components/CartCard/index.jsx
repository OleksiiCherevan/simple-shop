import "./style.scss";

import { Component, useEffect } from "react";

import ItemAttributes from "../ItemAttributes";

import {
    increseProductCount,
    decreaseProductCount,
    setProducts,
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
    const { name, prices, title, currencyIndex, count } = { ...product };

    const [cardCount, setCardCount] = useState(count);

    const products = useSelector((state) => state.productBag.products);

    const dispacth = useDispatch();

    useEffect(() => {
        let indexOfProduct = products.findIndex((prod) => Object.entries(prod).toString() ===
                Object.entries(product).toString());
        console.log(indexOfProduct);

        let newProducts = [...products]
        let oldStoreProduct = newProducts[indexOfProduct]
        newProducts[indexOfProduct] = {...oldStoreProduct}
        newProducts[indexOfProduct].count = cardCount;

        dispacth(setProducts({
            products: newProducts
        }))

    }, [cardCount]);

    const onIncreseCount = () => {
        let value = cardCount;
        value = value + 1 <= 99 ? value + 1 : 99;

        setCardCount(value);
    };

    const onDecreaseCount = () => {
        let value = cardCount;
        value = value - 1 > 0 ? value - 1 : 1;

        setCardCount(value);
    };

    const onCountChange = (event) => {
        let value = event.target.value;
        value = value > 0 ? value : 1;
        value = value <= 99 ? value : 99;
        setCardCount(value);
    };

    return (
        <div className="cart-card">
            <div className="cart-card__info">
                <div className="cart-card__title">{name}</div>
                <div className="cart-card__price">
                    {" "}
                    {`${prices[currencyIndex].currency.symbol} ${prices[currencyIndex].amount}`}
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
                    value={cardCount}
                    onChange={(event) => onCountChange(event)}
                ></input>
                <div
                    className="cart-card__square"
                    onClick={() => onDecreaseCount()}
                >
                    -
                </div>
            </div>

            <img className="cart-card__image" src={ProductA} alt={title}></img>
        </div>
    );
};

export default CartCard;
