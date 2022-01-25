import { createSlice } from "@reduxjs/toolkit";

const productAttributesSlice = createSlice({
    name: 'productAttributes',
    initialState: {
        attributes: {},
    },
    reducers: {
        setAttributes(state, action) {
            console.log('action payload attributes' ,action.payload.attributes)
            state.attributes = action.payload.attributes;
        },

        addAttributes(state, action) {
            state.attributes[action.payload.id] = action.payload.attribute;
        },

        clearAttributes(state) {
            state.attributes = {}
        },
    }
})

export const { setAttributes ,addAttributes, clearAttributes } = productAttributesSlice.actions;

export default productAttributesSlice.reducer;