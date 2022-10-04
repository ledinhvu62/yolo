import { configureStore } from "@reduxjs/toolkit"

import cartItemsSlice from "./shopping-cart/cartItemsSlice"
import keywordSearchSlice from "./search/keywordSearchSlice"

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        keywordSearch: keywordSearchSlice
    }
})