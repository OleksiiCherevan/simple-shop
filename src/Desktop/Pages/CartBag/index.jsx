import "./style.scss";

import Title from "../../Components/Title";
import { useSelector } from "react-redux";

import CartCard from "../../Components/CartCard";
import CartTotalCount from "../../Components/CartTotalCount";

const CartBag = () => {
    const { products, totalCount } = useSelector(state => state.productBag);
    const { currencyIndex } = useSelector(state => state.currencyIndex);
    return (
        <>
            <div className="cart-bag">
                <Title>Cart</Title>

                {products.length > 0 ? (
                    <>
                        <div className="cart-bag__content-wrapper">
                            {products ? (
                                products.map((product, index) => {
                                    return (
                                        <div key={{ product, index }}>
                                            <CartCard
                                                product={product}
                                                index={index}
                                                parent={"cart-card"}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <div>Empty</div>
                            )}
                        </div>

                        <CartTotalCount></CartTotalCount>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default CartBag;
