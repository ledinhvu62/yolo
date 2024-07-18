import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

const getLocalStorageItems = () => {
    const items = localStorage.getItem('cartItems')
    return items ? JSON.parse(items) : []
}

const initialState = {
    value: getLocalStorageItems(),
}

const showToast = (message, type) => {
    const toastOptions = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
        className: `toast__${type}`,
    }
    type === 'success' ? toast.success(message, toastOptions) : toast.error(message, toastOptions)
}

const findItem = (arr, item) => arr.filter(e => e._id === item._id && e.color === item.color && e.size === item.size)

const deleteItem = (arr, item) => arr.filter(e => e._id !== item._id || e.color !== item.color || e.size !== item.size)

const sortItems = (arr) => arr.sort((a, b) => {
    if (a._id > b._id) return 1
    if (a._id < b._id) return -1
    if (a.color > b.color) return 1
    if (a.color < b.color) return -1
    if (a.size > b.size) return 1
    if (a.size < b.size) return -1
    return 0
})

const syncLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(sortItems(items)))
}

export const syncCartWithServer = createAsyncThunk(
    'cartItemsSlice/syncCartWithServer',
    async (cartItems, { getState }) => {
        const { token, url } = getState()
        if (!token.value) {
            showToast('Giỏ hàng đã được cập nhật. Login ?', 'success')
            return
        }
        const response = await axios.post(`${url.value}/api/cart/set`, { cartData: cartItems }, { headers: { token: token.value } })
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
                console.log(payload.message)
                showToast(payload.message, 'success')
            } else if (payload) {
                console.log(payload.message)
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