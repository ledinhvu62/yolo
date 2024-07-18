import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token') !== null ? JSON.parse(localStorage.getItem('token')) : ''

const initialState = {
    value: token,
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload
            localStorage.setItem('token', JSON.stringify(state.value))
        },
        removeToken: (state) => {
            localStorage.removeItem('token')
            state.value = ''
        },
    }
})

export const { set, removeToken } = tokenSlice.actions

export default tokenSlice.reducer