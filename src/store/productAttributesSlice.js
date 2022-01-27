import { createSlice } from "@reduxjs/toolkit";

const productAttributesSlice = createSlice({
    name: "productAttributes",
    initialState: {
        attributes: {},
    },
    reducers: {
        setAttributes(state, action) {
            const { attributes } = action.payload.attributes;
            state.attributes = attributes;
        },

        updateAttributes(state, action) {
            const { attribute, value } = action.payload;
            state.attributes[attribute] = value;
        },

        clearAttributes(state) {
            state.attributes = {};
        },
    },
});

export const { setAttributes, updateAttributes, clearAttributes } =
    productAttributesSlice.actions;

export default productAttributesSlice.reducer;
