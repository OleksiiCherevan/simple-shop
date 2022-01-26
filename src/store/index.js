// import configure store
import { configureStore } from "@reduxjs/toolkit";
// import reducer 
import productBagReducer from './productBagSlice'
import productAttributeReducer from "./productAttributesSlice";
import currencyIndexSlice from "./currencyIndexSlice";

export default configureStore({
    reducer: {
        currencyIndex: currencyIndexSlice,
        productBag: productBagReducer,
        productAttributes: productAttributeReducer, 

    }
})


