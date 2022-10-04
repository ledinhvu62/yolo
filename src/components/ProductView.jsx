import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/cartItemsSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {
    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) {
        product = {
            price: 0,
            title: "",
            colors: [],
            size: []
        }
    }

    const [previewImg, setPreviewImg] = useState(product.image01)
    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [color, setColor] = useState(product.colors[0])
    const [size, setSize] = useState(product.size[0])
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(product.colors[0])
        setSize(product.size[0])
    }, [product])

    const addToCart = () => {
        dispatch(addItem({
            slug: product.slug,
            color,
            size,
            quantity,
            price: product.price
        }))
        alert("Thêm vào giỏ hàng thành công")
    }

    const navigate = useNavigate()

    const goToCart = () => {
        dispatch(addItem({
            slug: product.slug,
            color,
            size,
            quantity,
            price: product.price
        }))
        navigate('/cart')
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div
                        className="product__images__list__item"
                        onMouseOver={() => setPreviewImg(product.image01)}
                    >
                        <img src={product.image01} alt="" />
                    </div>
                    <div
                        className="product__images__list__item"
                        onMouseOver={() => setPreviewImg(product.image02)}
                    >
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="product-description__toggle">
                        <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h2 className="product__info__title">{product.title}</h2>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}đ
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
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
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích cỡ
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item, index) => (
                                <div
                                    key={index}
                                    className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                                    onClick={() => setSize(item)}
                                >
                                    <span className="product__info__item__list__item__size">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn-minus"
                            onClick={() => updateQuantity('minus')}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn-plus"
                            onClick={() => updateQuantity('plus')}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button
                        color="main"
                        backgroundColor="white"
                        onClick={() => addToCart()}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                    <Button onClick={() => goToCart()}>Mua ngay</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView