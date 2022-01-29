import "./style.scss";

import Title from "../../Components/Title";
import CartCard from "../../Components/CartCard";
import { useSelector } from "react-redux";

const CartBag = () => {
    const { products } = useSelector((state) => state.productBag);
console.log(products);
    return (
        <>
            <div className="cart-bag">
                <Title>Cart</Title>

                <div className="cart-bag__content-wrapper">
                    {products ? (
                        products.map((product, index) => {
                            return (
                                <div key={{ product, index }}>
                                    <CartCard product={product} index={index} />
                                </div>
                            );
                        })
                    ) : (
                        <div>Empty</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartBag;
