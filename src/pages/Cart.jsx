import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

import productData from '../assets/fake-data/products'

import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalProducts(cartItems.reduce((total, item) => total + (+item.quantity), 0))
        setTotalPrice(cartItems.reduce((total, item) => total + ((+item.quantity) * (+item.price)), 0))
    }, [cartItems])

    return (
        <Helmet title='Giỏ hàng'>
            <div className='cart'>
                <h2 className='cart__title'>
                    Giỏ hàng
                </h2>
                <div className={`cart__content ${totalProducts ? '' : 'empty'}`}>
                    {
                        totalProducts ? (
                            <>
                                <div className='cart__content__list'>
                                    {
                                        cartProducts.map((item, index) => (
                                            <CartItem item={item} key={index} />
                                        ))
                                    }
                                </div>
                                <div className='cart__content__info'>
                                    <div className='cart__content__info__txt'>
                                        <p>
                                            Bạn có {totalProducts} sản phẩm trong giỏ hàng
                                        </p>
                                        <div className='cart__content__info__txt__price'>
                                            <span>
                                                Tổng đơn hàng:
                                            </span>
                                            <span>
                                                {numberWithCommas(totalPrice)}đ
                                            </span>
                                        </div>
                                    </div>
                                    <div className='cart__content__info__btn'>
                                        <Link to=''>
                                            <Button size='block'>
                                                Đặt hàng
                                            </Button>
                                        </Link>
                                        <Link to='/catalog'>
                                            <Button
                                                color='main'
                                                backgroundColor='white'
                                                size='block'
                                            >
                                                Tiếp tục mua hàng
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className='cart__content__txt'>
                                    Giỏ hàng của bạn đang trống
                                </span>
                                <Link to='/catalog'>
                                    <Button
                                        color='main'
                                        backgroundColor='white'
                                        size='block'
                                    >
                                        Tiếp tục mua hàng
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart