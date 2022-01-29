import "./style.scss";

import { useSelector } from "react-redux";

const CartTotalCount = () => {
    const { products, totalCount } = useSelector((state) => state.productBag);
    const { currencyIndex } = useSelector((state) => state.currencyIndex);

    return (
        <div className="cart-total-count">
            <div className="cart-total-count__label">Total</div>
            <div className="cart-total-count__label">
                {products.length ? (
                    <>
                        {products[0].prices[currencyIndex].currency.symbol}
                        {(
                            products[0].prices[currencyIndex].amount *
                            totalCount
                        ).toFixed(2)}
                    </>
                ) : (
                    0
                )}
            </div>
        </div>
    );
};

export default CartTotalCount;
