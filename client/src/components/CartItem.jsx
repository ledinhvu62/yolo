import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'

import { updateItemWithSync, removeItemWithSync } from '../redux/features/cartItemsSlice'

import numberWithCommas from '../utils/numberWithCommas'

const CartItem = (props) => {
    const url = useSelector((state) => state.url.value)
    const [item, setItem] = useState(props.item)

    const fetchData = useCallback(async (_id) => {
        const response = await axios.get(`${url}/api/v1/products`, { params: { _id } })
        if (response.data.success) {
            setItem({ ...response.data.data, color: props.item.color, size: props.item.size })
        }
        else {

        }
    }, [url, props.item])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(props.item.quantity)
    //const [total, setTotal] = useState(props.item.price * props.item.quantity)

    useEffect(() => {
        fetchData(props.item._id)
        setQuantity(props.item.quantity)
        //setTotal(props.item.price * props.item.quantity)
    }, [props.item, fetchData])

    const updateQuantity = (option) => {
        dispatch(updateItemWithSync({
            _id: item._id,
            color: item.color,
            size: item.size,
            price: item.price,
            quantity: option === 'plus' ? quantity + 1 : (quantity - 1 === 0 ? 1 : quantity - 1),
        }))
    }

    const removeCartItem = () => {
        dispatch(removeItemWithSync(item))
    }

    return (
        <div className='cart__item'>
            <div
                className='cart__item__image'
                onClick={() => navigate(`/catalog/${item.slug}`)}
            >
                <img src={item?.images?.[0]} alt='Ảnh sản phẩm' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info__left'>
                    <Link to={`/catalog/${item.slug}`}>
                        {item.name}
                    </Link>
                    <span>
                        {`${colorData.getColor(item.color).display} - ${sizeData.getSize(item.size).display}`}
                    </span>
                </div>
                <div className='cart__item__info__right'>
                    <div className='cart__item__info__price'>
                        {numberWithCommas(+item.price)}đ
                    </div>
                    <div className='cart__item__info__quantity'>
                        <div className='product__info__item__quantity'>
                            <div
                                className={`product__info__item__quantity__btn-minus ${quantity === 1 ? '' : 'active'}`}
                                onClick={() => updateQuantity('minus')}
                            >
                                <i className='bx bx-minus'></i>
                            </div>
                            <div className='product__info__item__quantity__input'>
                                {quantity}
                            </div>
                            <div
                                className='product__info__item__quantity__btn-plus'
                                onClick={() => updateQuantity('plus')}
                            >
                                <i className='bx bx-plus'></i>
                            </div>
                        </div>
                    </div>
                    {/* <div className='cart__item__info__total'>
                        {numberWithCommas(total)}đ
                    </div> */}
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