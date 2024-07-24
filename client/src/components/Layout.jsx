import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import RoutesApp from '../routes/RoutesApp'

import Header from './Header'
import Footer from './Footer'
import LoginPopup from './LoginPopup'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../redux/features/productListSlice'
import { setCartItems } from '../redux/features/cartItemsSlice'
import axios from 'axios'
import ConfirmPopup from './ConfirmPopup'

const Layout = () => {
    const isAdminPanel = window.location.pathname === '/admin'
    const [showLogin, setShowLogin] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const dispatch = useDispatch()
    const url = useSelector((state) => state.url.value)
    const token = useSelector((state) => state.token.value)

    const fetchData = useCallback(async () => {
        const response = await axios.get(`${url}/api/v1/products`)
        if (response.data.success) {
            dispatch(set(response.data.data))
        }
    }, [dispatch, url])

    const cartItems = useSelector((state) => state.cartItems.value)
    const dispatchCart = useDispatch()

    const fetchCartData = useCallback(async (token) => {
        const response = await axios.get(`${url}/api/v1/cart`, { headers: { token } })
        if (response.data.success) {
            if (cartItems.length && response.data.cartData.length) {
                console.log('Case A')
                setShowConfirm(true)
            }
            else if (!cartItems.length) {
                console.log('Case B')
                dispatchCart(setCartItems(response.data.cartData))
            }
            else {
                console.log('Case C')
                await axios.post(`${url}/api/v1/cart`, { cartData: cartItems }, { headers: { token } })
            }
        }
    }, [dispatchCart, url]) // eslint-disable-line
    // Remove 'cartItems' from dependency to avoid unwanted rendering

    useEffect(() => {
        if (token) {
            fetchCartData(token)
        }
    }, [token, fetchCartData])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <BrowserRouter>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            {showConfirm && !isAdminPanel ? <ConfirmPopup setShowConfirm={setShowConfirm} /> : <></>}
            {isAdminPanel ?
                <div>
                    <RoutesApp />
                </div>
                :
                <div>
                    <Header setShowLogin={setShowLogin} />
                    <div className='container'>
                        <div className='main'>
                            <RoutesApp />
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </BrowserRouter>
    )
}

export default Layout