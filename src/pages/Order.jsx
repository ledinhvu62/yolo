import React, { useEffect, useState } from 'react'

import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { findLevel1ById, level1s } from 'dvhcvn'

const Order = () => {

    const cartItems = useSelector((state) => state.cartItems.value)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(cartItems.reduce((total, item) => total + ((+item.quantity) * (+item.price)), 0))
    }, [cartItems])

    // Test

    const DISCOUNT = 16000

    const [currentAddress, setCurrentAddress] = useState({
        province: '',
        district: '',
        ward: '',
        detailAddress: '',
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setCurrentAddress(data => ({
            ...data,
            [name]: value
        }))
    }

    const [shippingFee, setShippingFee] = useState(0)

    const calculateShippingFee = (id) => {
        if (id === 77) {
            setShippingFee(0)
        }
        else if (id < 38) {
            setShippingFee(30000)
        }
        else if (id >= 38 && id <= 46) {
            setShippingFee(25000)
        }
        else if (id >= 48 && id <= 68) {
            setShippingFee(20000)
        }
        else {
            setShippingFee(15000)
        }
    }

    useEffect(() => {
        console.log(currentAddress)
        currentAddress.province && calculateShippingFee(Number(currentAddress.province))
    }, [currentAddress])

    return (
        <form action='' className='order'>
            <div className='order__left'>
                <p className='order__left__title'>Thông tin giao hàng</p>
                <input type='text' placeholder='Họ và tên' />
                <div className='order__left__multi__fields'>
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Số điện thoại' />
                </div>
                <div className='order__left__multi__fields'>
                    <select name='province' id='' onChange={onChangeHandler} required>
                        <option value=''>Tỉnh/Thành</option>
                        {
                            level1s.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select name='district' id='' onChange={onChangeHandler} required>
                        <option value=''>Quận/Huyện</option>
                        {
                            findLevel1ById(currentAddress.province)?.children.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select name='ward' id='' onChange={onChangeHandler} required>
                        <option value=''>Xã/Phường</option>
                        {
                            findLevel1ById(currentAddress.province)?.findLevel2ById(currentAddress.district)?.children.map(item => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <input name='detailAddress' onChange={onChangeHandler} value={currentAddress.detailAddress} type='text' placeholder='Số nhà/Khu phố/Thôn/Ấp' required />
            </div>
            <div className='order__right'>
                <h2>Thông tin hóa đơn</h2>
                <div className='order__right__item'>
                    <p>Giá trị đơn hàng</p>
                    <p>{numberWithCommas(totalPrice)}đ</p>
                </div>
                <div className='order__right__item'>
                    <p>Phí vận chuyển</p>
                    <p>{numberWithCommas(shippingFee)}đ</p>
                </div>
                <div className='order__right__item'>
                    <p>Khuyến mãi</p>
                    <p>-{numberWithCommas(DISCOUNT)}đ</p>
                </div>
                <div className='order__right__item'>
                    <p>Tổng tiền thanh toán</p>
                    <p>{numberWithCommas(totalPrice + shippingFee - DISCOUNT)}đ</p>
                </div>
                <Link to=''>
                    <Button
                        color='white'
                        backgroundColor='main'
                        size='block'
                    >
                        Thanh toán
                    </Button>
                </Link>
            </div>
        </form>
    )
}

export default Order