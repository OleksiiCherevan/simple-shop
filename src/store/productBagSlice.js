import { createSlice, current } from "@reduxjs/toolkit";

const getTotalPrice = (products) => {
    return products.reduce((accum, item) => {
        return accum + (item * item.count)
    }, 0)
}

const productBagSlice = createSlice({
    name: "productBag",
    initialState: {
        products: [],
        totalPrice: 0
    },
    reducers: {
        addProduct(state, action) {
            const { product } = action.payload;
            state.products.push(product);

            state.totalPrice = getTotalPrice(state.products)
        },

        setProducts(state, action) {
            const { products } = action.payload;
            state.products = products;

            state.totalPrice = getTotalPrice(products)
        },

        // increseProductCount(state, action) {
        //     const { products } = state
        //     const { product } = action.payload.product;
        //     console.log(products);
        //     let foundProduct = products.find(prod => prod === product )
        //     foundProduct.count ++
        //     state.products = products
        // },

        // decreaseProductCount(state, action) {
        //     let product = action.payload.product;
        //     let indexOfProduct = state.products.findIndex(product)
        //     state.products[indexOfProduct].count --
        // },

        removeProduct(state, action) {
        },
    },
});

// export const { addProduct, removeProduct, increseProductCount, decreaseProductCount } = productBagSlice.actions;

 export const { addProduct, removeProduct, setProducts} = productBagSlice.actions;

export default productBagSlice.reducer;
