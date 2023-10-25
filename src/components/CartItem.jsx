import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'

import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlice'

import numberWithCommas from '../utils/numberWithCommas'

const CartItem = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)
    
    const color = colorData.getColor(props.item.color)
    const size = sizeData.getSize(props.item.size)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (option) => {
        if (option === '+') {
            dispatch(updateItem({
                ...item,
                quantity: quantity + 1,
            }))
        }

        if (option === '-') {
            dispatch(updateItem({
                ...item,
                quantity: quantity - 1 === 0 ? 1 : quantity - 1,
            }))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className='cart__item'>
            <div
                className='cart__item__image'
                onClick={() => navigate(`/catalog/${item.slug}`)}
            >
                <img src={item.product.image01} alt='Ảnh sản phẩm' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info__left'>
                    <Link to={`/catalog/${item.slug}`}>
                        {item.product.title}
                    </Link>
                    <span>
                        {`${color.display} - ${size.display}`}
                    </span>
                </div>
                <div className='cart__item__info__right'>
                    <div className='cart__item__info__price'>
                        {numberWithCommas(+item.product.price)}đ
                    </div>
                    <div className='cart__item__info__quantity'>
                        <div className='product__info__item__quantity'>
                            <div
                                className={`product__info__item__quantity__btn-minus ${quantity === 1 ? '' : 'active'}`}
                                onClick={() => updateQuantity('-')}
                            >
                                <i className='bx bx-minus'></i>
                            </div>
                            <div className='product__info__item__quantity__input'>
                                {quantity}
                            </div>
                            <div
                                className='product__info__item__quantity__btn-plus'
                                onClick={() => updateQuantity('+')}
                            >
                                <i className='bx bx-plus'></i>
                            </div>
                        </div>
                    </div>
                    <div
                        className='cart__item__info__btn-delete'
                        onClick={() => removeCartItem()}
                    >
                        <i className='bx bx-trash'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
}

export default CartItem