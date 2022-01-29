import { createSlice, current } from "@reduxjs/toolkit";

const MAX_COUNT = 100;

const getTotalPrice = (products) => {
    if (products.length === 0) return 0;
    
    let res = products.reduce((accum, item) => {
        return accum + item.prices[item.currencyIndex].amount * item.count;
    }, 0);

    return res.toFixed(2);
};


const getTotalCount = (products) => {
    if (products.length === 0) return 0;

    let res = products.reduce((accum, item) => {
        return accum + (+item.count);
    }, 0);

    return res;
};

const getDefaultAttributes = (attributes) => {
    let resAttributes = {};
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        resAttributes[attribute.id] = attribute.items[0].id;
    }
    return resAttributes;
};

const getIndexOfProduct = (products, product) => {
    let res = Array.from(products).findIndex((prod) => {
        let newProd = { ...prod };
        let newProduct = { ...product };

        newProd.count = 1;
        newProduct.count = 1;

        return (
            JSON.stringify(newProd).toString() ===
            JSON.stringify(newProduct).toString()
        );
    });

    return res;
};


const getProductsWithNewProductCount = (products, product, count) => {
    let indexOfProduct = getIndexOfProduct(products, product);
    let newProducts = [...products];
    let oldStoreProduct = newProducts[indexOfProduct];

    newProducts[indexOfProduct] = { ...oldStoreProduct };
    newProducts[indexOfProduct].count = count;

    return newProducts;
};


const getProductsWithoutProduct = (products, product) => {
    let arrayProducts = Array.from(products);
    let indexProductToChange = arrayProducts.indexOf(product);
    arrayProducts.splice(indexProductToChange, 1);

    return arrayProducts;
};


const productBagSlice = createSlice({
    name: "productBag",
    initialState: {
        products: [],
        totalPrice: 0,
        totalCount: 0,
    },
    reducers: {
        addProduct(state, action) {
            const { product } = action.payload;
            const { products } = state;

            let indexOfProduct = getIndexOfProduct(products, product);

            if (indexOfProduct < 0) {
                

                state.products.push(product);
                state.totalPrice = getTotalPrice(products);
                state.totalCount = getTotalCount(products);
            } else if (products[indexOfProduct].count < MAX_COUNT - 1) {

                let newProducts = getProductsWithNewProductCount(
                    products,
                    product,
                    products[indexOfProduct].count + 1
                );


                state.products = newProducts;
                state.totalPrice = getTotalPrice(newProducts);
                state.totalCount = getTotalCount(newProducts);
            } 
        },

        setProducts(state, action) {
            const { products } = action.payload;

            state.products = products;
            state.totalPrice = getTotalPrice(products);
            state.totalCount = getTotalCount(products);
        },

        removeProduct(state, action) {
            const { products } = state;
            const { product } = action.payload;

            let newProducts = getProductsWithoutProduct(products, product);

            state.products = newProducts;
            state.totalPrice = getTotalPrice(newProducts);
            state.totalCount = getTotalCount(newProducts);
        },

        setProductCount(state, action) {
            const { products } = state;
            const { product, count } = action.payload;

            let newProducts = getProductsWithNewProductCount(
                products,
                product,
                count
            );

            state.products = newProducts;
            state.totalPrice = getTotalPrice(newProducts);
            state.totalCount = getTotalCount(newProducts);
        },

        increaseProductCount(state, action) {
            const { products } = state;
            const { product } = action.payload;

            if (product.count + 1 < MAX_COUNT) {
                let newProducts = getProductsWithNewProductCount(
                    products,
                    product,
                    product.count + 1
                );
                state.products = newProducts;
                state.totalPrice = getTotalPrice(newProducts);
                state.totalCount = getTotalCount(newProducts);
            }
        },

        decreaseProductCount(state, action) {
            const { products } = state;
            const { product } = action.payload;

            var newProducts;

            if (product.count - 1 > 0) {
                newProducts = getProductsWithNewProductCount(
                    products,
                    product,
                    product.count - 1
                );
            } else {
                newProducts = getProductsWithoutProduct(products, product);
            }

            state.products = newProducts;
            state.totalPrice = getTotalPrice(newProducts);
            state.totalCount = getTotalCount(newProducts);
        },
    },
});

export const {
    addProduct,
    removeProduct,
    setProducts,
    increaseProductCount,
    decreaseProductCount,
    setProductCount,
} = productBagSlice.actions;

export default productBagSlice.reducer;
