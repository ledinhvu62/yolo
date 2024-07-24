import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import numberWithCommas from '../utils/numberWithCommas'

import categoryData from '../assets/fake-data/category'
import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'

const ListProductView = ({ url }) => {
    const [data, setData] = useState([])

    const fetchData = useCallback(async () => {
        const response = await axios.get(`${url}/api/v1/product`)
        console.log(response.data.data)
        if (response.data.success) {
            setData(response.data.data)
        }
    }, [url])

    const removeProduct = async (productId) => {
        const response = await axios.post(`${url}/api/v1/product/remove`, { id: productId })
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
                    <div key={item._id} className='list__product__table'>
                        <img src={item.images[0]} alt='Ảnh sản phẩm' />
                        <p>{item.name}</p>
                        <p>{categoryData.getCategory(item.categorySlug).display}</p>
                        <p>{numberWithCommas(item.price)}đ</p>
                        <p>{item.color.map((item) => colorData.getColor(item).display).join(', ')}</p>
                        <p>{item.size.map((item) => sizeData.getSize(item).display).join(', ')}</p>
                        <i onClick={() => removeProduct(item._id)} className='bx bx-trash'></i>
                    </div>
                )
            })}
        </>
    )
}

export default ListProductView