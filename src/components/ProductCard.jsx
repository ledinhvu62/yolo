import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addItem } from '../redux/shopping-cart/cartItemsSlice'

import productData from '../assets/fake-data/products'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {
    const product = productData.getProductBySlug(props.slug)
    
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({
            slug: props.slug,
            color: product.colors[0],
            size: product.size[0],
            quantity: 1,
            price: props.price
        }))
        alert("Thêm vào giỏ hàng thành công")
    }

    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="Ảnh sản phẩm 1" />
                    <img src={props.img02} alt="Ảnh sản phẩm 2" />
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <div className="product-card__price">
                    {numberWithCommas(props.price)}đ
                </div>
            </Link>
            <div className="product-card__add-to-cart" onClick={addToCart}>
                <i className='bx bx-cart-add'></i>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard