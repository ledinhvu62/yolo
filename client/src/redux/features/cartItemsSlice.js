import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import showToast from '../../utils/showToast'
import colorData from '../../assets/fake-data/product-color'
import sizeData from '../../assets/fake-data/product-size'

const getLocalStorageItems = () => {
    const items = localStorage.getItem('cartItems')
    return items ? JSON.parse(items) : []
}

const initialState = {
    value: getLocalStorageItems(),
}

const findItem = (arr, item) => arr.filter(e => e._id === item._id && e.color === item.color && e.size === item.size)

const deleteItem = (arr, item) => arr.filter(e => e._id !== item._id || e.color !== item.color || e.size !== item.size)

const sortItems = (arr) => arr.sort((a, b) => {
    if (a._id !== b._id) {
        return a._id - b._id
    }
    const colorAIndex = colorData.getColorIndex(a.color)
    const colorBIndex = colorData.getColorIndex(b.color)
    if (colorAIndex !== colorBIndex) {
        return colorAIndex - colorBIndex
    }
    const sizeAIndex = sizeData.getSizeIndex(a.size)
    const sizeBIndex = sizeData.getSizeIndex(b.size)
    return sizeAIndex - sizeBIndex
})

const syncLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(sortItems(items)))
}

export const syncCartWithServer = createAsyncThunk(
    'cartItemsSlice/syncCartWithServer',
    async (cartItems, { getState }) => {
        const { token, url } = getState()
        if (!token.value) {
            showToast('Giỏ hàng đã được cập nhật. Đăng nhập ?', 'success')
            return
        }
        const response = await axios.post(`${url.value}/api/v1/cart`, { cartData: cartItems }, { headers: { token: token.value } })
        return response.data
    }
)

export const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const duplicate = findItem(state.value, newItem)

            if (duplicate.length > 0) {
                state.value = deleteItem(state.value, newItem)
                state.value.push({ ...newItem, quantity: newItem.quantity + duplicate[0].quantity })
            } else {
                state.value.push(newItem)
            }
            syncLocalStorage(state.value)
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload
            const item = findItem(state.value, itemUpdate)

            if (item.length > 0) {
                state.value = deleteItem(state.value, itemUpdate)
                state.value.push(itemUpdate)
                syncLocalStorage(state.value)
            }
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.value = deleteItem(state.value, item)
            syncLocalStorage(state.value)
        },
        setCartItems: (state, action) => {
            state.value = action.payload
            syncLocalStorage(state.value)
        },
    },
    extraReducers: {
        [syncCartWithServer.fulfilled]: (state, { payload }) => {
            if (payload && payload.success) {
                showToast(payload.message, 'success')
            } else if (payload) {
                showToast(payload.message, 'error')
            }
        }
    }
})

export const addItemWithSync = (item) => async (dispatch, getState) => {
    await dispatch(addItem(item))
    const { value: cartItems } = getState().cartItems
    await dispatch(syncCartWithServer(cartItems))
}

export const updateItemWithSync = (item) => async (dispatch, getState) => {
    await dispatch(updateItem(item))
    const { value: cartItems } = getState().cartItems
    await dispatch(syncCartWithServer(cartItems))
}

export const removeItemWithSync = (item) => async (dispatch, getState) => {
    await dispatch(removeItem(item))
    const { value: cartItems } = getState().cartItems
    await dispatch(syncCartWithServer(cartItems))
}

export const { addItem, updateItem, removeItem, setCartItems } = cartItemsSlice.actions

export default cartItemsSlice.reducer