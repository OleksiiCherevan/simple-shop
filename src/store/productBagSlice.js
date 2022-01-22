import { createSlice } from "@reduxjs/toolkit";

const productBagSlice = createSlice({
    name: 'productBag',
    initialState: {
        product: [],
    },
    reducers: {
        addProduct(state, action) {

        },

        removeProduct(state, action) {

        },
    }
})

export const { addProduct, removeProduct } = productBagSlice.actions;

export default productBagSlice.reducer;