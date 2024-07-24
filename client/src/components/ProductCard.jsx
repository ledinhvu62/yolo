import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className='product-card__image'>
                    <img src={props.images[0]} alt='Ảnh sản phẩm 1' />
                    <img src={props.images[1]} alt='Ảnh sản phẩm 2' />
                </div>
                <h3 className='product-card__name'>{props.name}</h3>
                <div className='product-card__price'>
                    {numberWithCommas(props.price)}đ
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard