import { createSlice } from '@reduxjs/toolkit'

const products = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products')) : []

const initialState = {
    value: products,
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload
            localStorage.setItem('products', JSON.stringify(state.value))
        },
    }
})

export const { set } = productListSlice.actions

export default productListSlice.reducer