import { createSlice } from "@reduxjs/toolkit";

const productBagSlice = createSlice({
    name: "productBag",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct(state, action) {
            let product = action.payload.product;
            state.products.push(product);
        },

        setProducts(state, action) {
            let products = action.payload.products;
            state.products = products;
        },

        removeProduct(state, action) {
        },
    },
});

export const { addProduct, removeProduct } = productBagSlice.actions;

export default productBagSlice.reducer;
