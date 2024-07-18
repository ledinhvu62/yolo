import { configureStore } from '@reduxjs/toolkit'

import cartItemsSlice from './shopping-cart/cartItemsSlice'
import keywordSearchSlice from './search/keywordSearchSlice'
import tokenSlice from './token/tokenSlice'
import productListSlice from './product/productListSlice'
import urlSlice from './url/urlSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
        keywordSearch: keywordSearchSlice,
        token: tokenSlice,
        productList: productListSlice,
        url: urlSlice,
    }
})