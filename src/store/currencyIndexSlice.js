import { createSlice } from "@reduxjs/toolkit";

const productCurrencyIndex = createSlice({
    name: 'productCurrencyIndex',
    initialState: {
        currencyIndex: 0,
    },
    reducers: {
        setCurrencyIndex(state, action) {
            state.currencyIndex = action.payload.currencyIndex;
        },
    }
})

export const { setCurrencyIndex } = productCurrencyIndex.actions;

export default productCurrencyIndex.reducer;