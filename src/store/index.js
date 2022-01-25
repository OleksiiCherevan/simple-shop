// import configure store
import { configureStore } from "@reduxjs/toolkit";
// import reducer 
import productBagReducer from './productBagSlice'
import productAttributeReducer from "./productAttributesSlice";

export default configureStore({
    reducer: {
        productBag: productBagReducer,
        productAttributes: productAttributeReducer,
    }
})


