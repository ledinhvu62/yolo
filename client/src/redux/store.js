import { configureStore } from '@reduxjs/toolkit'

import cartItemsSlice from './features/cartItemsSlice'
import keywordSearchSlice from './features/keywordSearchSlice'
import productListSlice from './features/productListSlice'
import tokenSlice from './features/tokenSlice'
import urlSlice from './features/urlSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        keywordSearch: keywordSearchSlice,
        productList: productListSlice,
        token: tokenSlice,
        url: urlSlice,
    }
})