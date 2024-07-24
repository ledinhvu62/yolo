import { configureStore } from '@reduxjs/toolkit'

import cartItemsSlice from './features/cartItemsSlice'
import keywordSearchSlice from './features/keywordSearchSlice'
import tokenSlice from './features/tokenSlice'
import productListSlice from './features/productListSlice'
import urlSlice from './features/urlSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        keywordSearch: keywordSearchSlice,
        token: tokenSlice,
        productList: productListSlice,
        url: urlSlice,
    }
})