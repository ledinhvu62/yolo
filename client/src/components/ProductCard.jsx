import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import numberWithCommas from '../utils/numberWithCommas'
import { useSelector } from 'react-redux'

const ProductCard = props => {
    //const url = useSelector((state) => state.url.value)
    const url = 'https://yolo-client-eta.vercel.app'

    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className='product-card__image'>
                    <img src={`${url}/images/${props.img01}`} alt='Ảnh sản phẩm 1' />
                    <img src={`${url}/images/${props.img02}`} alt='Ảnh sản phẩm 2' />
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
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard