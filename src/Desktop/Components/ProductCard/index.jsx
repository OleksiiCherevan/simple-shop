import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../store/productBagSlice";

import ButtonMiniCart from "../ButtonMiniCart";

import { getDefaultAttributes } from "../../../assets/utils";

// class ProductCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ...props,
//             currencyIndex: localStorage.getItem("currencyIndex") | 0,
//         };
//     }

//     componentDidMount() {}
//     render() {
//         return this.state.inStock ? (
//             <>
//                 <div className="product-card-desktop product-card-desktop_active">
//                     <div className="product-card-desktop__image">
//                         <img src={this.state.gallery[0]}></img>

//                         <svg
//                             className="circle-icon"
//                             width="52"
//                             height="52"
//                             viewBox="0 0 52 52"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <circle cx="26" cy="26" r="26" fill="#5ECE7B" />
//                             <path
//                                 d="M37.4736 19.8484C37.0186 19.2925 36.3109 18.9546 35.5785 18.9546H20.1907L19.711 17.1669C19.4326 16.1277 18.4732 15.4028 17.3608 15.4028H14.7837C14.3544 15.4028 14 15.7407 14 16.1523C14 16.5628 14.3534 16.9017 14.7837 16.9017H17.3608C17.7398 16.9017 18.0685 17.1433 18.1692 17.5058L21.2517 29.2494C21.53 30.2886 22.4894 31.0135 23.6018 31.0135H33.6833C34.7947 31.0135 35.7808 30.2886 36.0335 29.2494L37.9286 21.807C38.1053 21.1293 37.9543 20.4044 37.4736 19.8485L37.4736 19.8484ZM36.3879 21.4671L34.4927 28.9095C34.3921 29.272 34.0634 29.5136 33.6844 29.5136H23.6018C23.2228 29.5136 22.8941 29.272 22.7935 28.9095L20.5953 20.4772H35.5796C35.8323 20.4772 36.085 20.598 36.237 20.7915C36.388 20.984 36.463 21.2257 36.388 21.4673L36.3879 21.4671Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M24.1332 31.9778C22.6932 31.9778 21.5059 33.1132 21.5059 34.4902C21.5059 35.8672 22.6933 37.0027 24.1332 37.0027C25.5733 37.0036 26.7606 35.8682 26.7606 34.491C26.7606 33.1137 25.5732 31.9775 24.1332 31.9775V31.9778ZM24.1332 35.4814C23.5519 35.4814 23.0968 35.0463 23.0968 34.4903C23.0968 33.9344 23.5519 33.4993 24.1332 33.4993C24.7146 33.4993 25.1696 33.9344 25.1696 34.4903C25.1687 35.0227 24.689 35.4814 24.1332 35.4814Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M32.8251 31.978C31.3851 31.978 30.1978 33.1135 30.1978 34.4905C30.1978 35.8675 31.3852 37.0029 32.8251 37.0029C34.2651 37.0029 35.4525 35.8675 35.4525 34.4905C35.4279 33.1143 34.2651 31.978 32.8251 31.978ZM32.8251 35.4816C32.2438 35.4816 31.7887 35.0465 31.7887 34.4906C31.7887 33.9346 32.2438 33.4995 32.8251 33.4995C33.4065 33.4995 33.8615 33.9346 33.8615 34.4906C33.8615 35.0229 33.3809 35.4816 32.8251 35.4816Z"
//                                 fill="white"
//                             />
//                         </svg>
//                     </div>

//                     <div className="product-card-desktop__content">
//                         <div className="product-card-desktop__title">
//                             {this.state.brand} {this.state.name}
//                         </div>

//                         <div className="product-card-desktop__price">
//                             {`${this.state.prices[this.state.currencyIndex].currency.symbol} ${this.state.prices[this.state.currencyIndex].amount}`}
//                         </div>
//                     </div>
//                 </div>
//             </>
//         ) : (
//             <>
//                 <div className="product-card-desktop">
//                     <div className="product-card-desktop__image">
//                         <img src={this.state.gallery[0]}></img>

//                         <div className="product-card-desktop__out">
//                             <div>Out of stock</div>
//                         </div>
//                     </div>

//                     <div className="product-card-desktop__content">
//                         <div className="product-card-desktop__title">
//                             {this.state.name}
//                         </div>

//                         <div className="product-card-desktop__price">
//                             {`${this.state.prices[this.state.currencyIndex].currency.symbol} ${this.state.prices[this.state.currencyIndex].amount}`}
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

const ProductCardFunc = (props) => {
    const { product, directTo } = props;
    const { name, inStock, gallery, attributes, prices, brand } = {
        ...product,
    };

    const dispatch = useDispatch();

    const currencyIndex = useSelector(
        (state) => state.currencyIndex.currencyIndex
    );

    const onBuyClick = () => {
        let newProd = {
            ...product,
            selectedAttributes: getDefaultAttributes(attributes),
            currencyIndex,
            count: 1,
        };

        dispatch(
            addProduct({
                product: newProd,
            })
        );
    };

    useState(() => {}, []);

    return inStock ? (
        <>
            <div className="product-card-desktop">
                <div className="product-card-desktop__image">
                    <Link to={directTo}>
                        <img src={gallery[0]}></img>
                    </Link>
                    <div
                        className="circle-icon"
                        onClick={(e) => {
                            onBuyClick();
                        }}
                    >
                        <ButtonMiniCart></ButtonMiniCart>
                    </div>
                </div>

                <div className="product-card-desktop__content">
                    <div className="product-card-desktop__title">
                        {brand} {name}
                    </div>

                    <div className="product-card-desktop__price">
                        {`${prices[currencyIndex].currency.symbol} ${prices[currencyIndex].amount}`}
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="product-card-desktop">
                <div className="product-card-desktop__image">
                    <img src={gallery[0]}></img>

                    <Link to={directTo}>
                        <div className="product-card-desktop__out">
                            <div>Out of stock</div>
                        </div>
                    </Link>
                </div>

                <div className="product-card-desktop__content">
                    <div className="product-card-desktop__title">{name}</div>

                    <div className="product-card-desktop__price">
                        {`${prices[currencyIndex].currency.symbol} ${prices[currencyIndex].amount}`}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCardFunc;
