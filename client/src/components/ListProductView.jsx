import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import numberWithCommas from '../utils/numberWithCommas'

import categoryData from '../assets/fake-data/category'

const ListProductView = () => {
    const url = useSelector((state) => state.url.value)

    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const response = await axios.get(`${url}/api/v1/products`)
        if (response.data.success) {
            setData(response.data.data)
        }
    }, [url])

    const removeProduct = async (productId) => {
        const response = await axios.delete(`${url}/api/v1/products/${productId}`)
        if (response.data.success) {
            await fetchData()
        }
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            <div className='list__product__table title'>
                <b>Hình ảnh</b>
                <b>Tên</b>
                <b>Loại</b>
                <b>Giá</b>
                <b>Màu sắc</b>
                <b>Kích cỡ</b>
                <b>Xóa</b>
            </div>
            {data.map(item => {
                return (
                    <div key={item._id} className='list__product__table item'>
                        <div className='image-wrapper'>
                            <img src={item.images[0]} alt='Ảnh sản phẩm' onClick={() => { window.open(item.images[0], '_blank') }} />
                        </div>
                        <p>{item.name}</p>
                        <p>{categoryData.getCategory(item.categorySlug).display}</p>
                        <p>{numberWithCommas(item.price)}đ</p>
                        <p>{item.color.join(', ')}</p>
                        <p>{item.size.join(', ')}</p>
                        <i onClick={() => removeProduct(item._id)} className='bx bx-trash'></i>
                    </div>
                )
            })}
        </>
    )
}

export default ListProductView