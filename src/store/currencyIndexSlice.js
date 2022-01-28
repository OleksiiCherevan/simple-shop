import { createSlice } from "@reduxjs/toolkit";

const currencyIndex = createSlice({
    name: 'currencyIndex',
    initialState: {
        currencyIndex: 0,
    },
    reducers: {
        setCurrencyIndex(state, action) {
            state.currencyIndex = action.payload.currencyIndex;
        },
    }
})

export const { setCurrencyIndex } = currencyIndex.actions;

export default currencyIndex.reducer;