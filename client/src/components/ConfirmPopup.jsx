import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../redux/features/cartItemsSlice'

const ConfirmPopup = ({ setShowConfirm }) => {
    const url = useSelector((state) => state.url.value)
    const cartItems = useSelector((state) => state.cartItems.value)
    const token = useSelector((state) => state.token.value)

    const onConfirm = async () => {
        const response = await axios.post(`${url}/api/v1/cart`, { cartData: cartItems }, { headers: { token } })
        if (response.data.success) {
            setShowConfirm(false)
        }
        else {
            console.log(response.data.message)
        }
    }

    const dispatch = useDispatch()

    const onDeny = async () => {
        const response = await axios.get(`${url}/api/v1/cart`, { headers: { token } })
        if (response.data.success) {
            dispatch(setCartItems(response.data.cartData))
            setShowConfirm(false)
        }
        else {
            console.log(response.data.message)
        }
    }

    return (
        <div className='confirm__popup'>
            <div className='confirm__popup__container'>
                <div className='confirm__popup__title'>
                    <h2>Xác nhận giỏ hàng</h2>
                    <i onClick={() => setShowConfirm(false)} className='bx bx-x'></i>
                </div>
                <div className='confirm__popup__content'>
                    <p>Giỏ hàng của bạn đã tồn tại. Bạn có muốn cập nhật lại không?</p>
                    <div className='confirm__popup__content__option'>
                        <button onClick={onDeny}>Không</button>
                        <button onClick={onConfirm}>Cập nhật</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConfirmPopup