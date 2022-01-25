import { createSlice } from "@reduxjs/toolkit";

const productBagSlice = createSlice({
    name: 'productBag',
    initialState: {
        products: [],
    },
    reducers: {
        addProduct(state, action) {
            state.products.push(action.payload.product)
        },

        removeProduct(state, action) {

        },
    }
})

export const { addProduct, removeProduct } = productBagSlice.actions;

export default productBagSlice.reducer;