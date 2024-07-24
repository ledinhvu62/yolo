import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'
import { ToastContainer } from 'react-toastify'
import { addItemWithSync } from '../redux/shopping-cart/cartItemsSlice'

const ProductView = ({ product = { price: 0, name: '', images: [], color: [], size: [] } }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [previewImg, setPreviewImg] = useState(product?.images[0])
    const [color, setColor] = useState(product.color[0])
    const [size, setSize] = useState(product.size[0])
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (option) => {
        if (option === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(product.color[0])
        setSize(product.size[0])
    }, [product])

    const addToCart = () => {
        dispatch(addItemWithSync({
            _id: product._id,
            color,
            size,
            price: product.price,
            quantity,
        }))
    }
    
    const goToCart = () => {
        addToCart()
        navigate('/cart')
    }

    return (
        <div className='product'>
            <ToastContainer />
            <div className='product__images'>
                <div className='product__images__list'>
                    <div
                        className='product__images__list__item'
                        onMouseOver={() => setPreviewImg(product.images[0])}
                    >
                        <img src={product.images[0]} alt='Ảnh sản phẩm 1' />
                    </div>
                    <div
                        className='product__images__list__item'
                        onMouseOver={() => setPreviewImg(product.images[1])}
                    >
                        <img src={product.images[1]} alt='Ảnh sản phẩm 2' />
                    </div>
                </div>
                <div className='product__images__main'>
                    <img src={previewImg} alt='Ảnh sản phẩm' />
                </div>
                <div className='product-description'>
                    <div className='product-description__title'>
                        Chi tiết sản phẩm
                    </div>
                    <div className='product-description__content' dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>
            </div>
            <div className='product__info'>
                <h2 className='product__info__title'>
                    {product.name}
                </h2>
                <div className='product__info__item'>
                    <span className='product__info__item__price'>
                        {numberWithCommas(product.price)}đ
                    </span>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        Màu sắc:
                    </div>
                    <div className='product__info__item__list'>
                        {
                            product.color.map((item, index) => (
                                <div
                                    key={index}
                                    className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                                    onClick={() => setColor(item)}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        Kích cỡ:
                    </div>
                    <div className='product__info__item__list'>
                        {
                            product.size.map((item, index) => (
                                <div
                                    key={index}
                                    className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                                    onClick={() => setSize(item)}
                                >
                                    <span className='product__info__item__list__item__size'>
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='product__info__item'>
                    <div className='product__info__item__title'>
                        Số lượng:
                    </div>
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
                <div className='product__info__item'>
                    <Button
                        color='main'
                        backgroundColor='white'
                        size='block'
                        onClick={() => addToCart()}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
                <div className='product__info__item'>
                    <Button
                        size='block'
                        onClick={() => goToCart()}
                    >
                        Mua ngay
                    </Button>
                </div>
            </div>
            <div className='product-description tablet-mobile'>
                <div className='product-description__title'>
                    Chi tiết sản phẩm
                </div>
                <div className='product-description__content' dangerouslySetInnerHTML={{ __html: product.description }}></div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
}

export default ProductView