// import configure store
import { configureStore } from "@reduxjs/toolkit";
// import reducer 
import productBagReducer from './productBagSlice'

export default configureStore({
    reducer: {
        productBag: productBagReducer
    }
})


