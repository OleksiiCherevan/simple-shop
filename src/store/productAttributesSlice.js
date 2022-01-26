import { createSlice } from "@reduxjs/toolkit";

const productAttributesSlice = createSlice({
    name: 'productAttributes',
    initialState: {
        attributes: {},
    },
    reducers: {
        setAttributes(state, action) {
            state.attributes = action.payload.attributes;
            console.log(state)
        },

        updateAttributes(state, action) {
            const {attribute, value} = action.payload
            state.attributes[attribute] = value;
            console.log(state);
        },

        clearAttributes(state) {
            state.attributes = {}
        },
    }
})

export const { setAttributes ,updateAttributes, clearAttributes } = productAttributesSlice.actions;

export default productAttributesSlice.reducer;