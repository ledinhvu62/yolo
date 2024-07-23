import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //value: 'http://localhost:4000',
    //value: 'https://yolo-ledinhvu.vercel.app',
    value: 'https://yolo-server-inky.vercel.app'
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
    }
})

export default urlSlice.reducer