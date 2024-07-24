import React, { useEffect, useState } from 'react'
import axios from 'axios'

import changeToSlug from '../utils/changeToSlug'
import CheckBox from './CheckBox'

import categoryData from '../assets/fake-data/category'
import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'
import { useSelector } from 'react-redux'

const AddProductView = () => {
    const url = useSelector((state) => state.url.value)

    const categoryList = categoryData.getAllCategories()
    const colorList = colorData.getAllColors()
    const sizeList = sizeData.getAllSizes()

    const [images, setImages] = useState([])

    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        color: [],
        size: [],
        categorySlug: 'ao-thun',
    })

    const filterSelect = (type, checked, value) => {
        if (checked) {
            switch (type) {
                case 'COLOR':
                    setData({
                        ...data,
                        color: [...data.color, value],
                    })
                    break
                case 'SIZE':
                    setData({
                        ...data,
                        size: [...data.size, value],
                    })
                    break
                default:
            }
        } else {
            switch (type) {
                case 'COLOR':
                    const newColor = data.color.filter(e => e !== value)
                    setData({
                        ...data,
                        color: newColor,
                    })
                    break
                case 'SIZE':
                    const newSize = data.size.filter(e => e !== value)
                    setData({
                        ...data,
                        size: newSize,
                    })
                    break
                default:
            }
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', data.price)
        data.color.forEach((item, index) => {
            formData.append('color', data.color[index])
        })
        data.size.forEach((item, index) => {
            formData.append('size', data.size[index])
        })
        formData.append('categorySlug', data.categorySlug)
        images.forEach((item, index) => {
            formData.append('images', images[index])
        })
        formData.append('slug', changeToSlug(data.name))
        
        const response = await axios.post(`${url}/api/v1/products`, formData)
        if (response.data.success) {
            setData({
                name: '',
                description: '',
                price: '',
                color: [],
                size: [],
                categorySlug: 'ao-thun',
            })
            setImages([])
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='add__product__view'>
            <form action='' className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add__product__view__form__item flex-col'>
                    <p>Tải lên hình ảnh 1</p>
                    <input onChange={(e) => {
                        let newArr = [...images]
                        newArr[0] = e.target.files[0]
                        setImages(newArr)
                    }} type='file' id='images' required />
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Tải lên hình ảnh 2</p>
                    <input onChange={(e) => {
                        let newArr = [...images]
                        newArr[1] = e.target.files[0]
                        setImages(newArr)
                    }} type='file' id='images' required />
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Tên sản phẩm</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' required />
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Mô tả sản phẩm</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' id='' cols='30' rows='10' required ></textarea>
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Giá</p>
                    <input onChange={onChangeHandler} value={data.price} type='number' name='price' required />
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Màu sắc</p>
                    <div className='add__product__view__form__checkbox'>
                        {
                            colorList.map((item, index) => (
                                <CheckBox
                                    key={index}
                                    label={item.display}
                                    checked={data.color.includes(item.color)}
                                    onChange={(input) => filterSelect('COLOR', input.checked, item.color)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Kích cỡ</p>
                    <div className='add__product__view__form__checkbox'>
                        {
                            sizeList.map((item, index) => (
                                <CheckBox
                                    key={index}
                                    label={item.display}
                                    checked={data.size.includes(item.size)}
                                    onChange={(input) => filterSelect('SIZE', input.checked, item.size)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Loại</p>
                    <select onChange={onChangeHandler} name='categorySlug' required>
                        {
                            categoryList.map((item, index) => (
                                <option key={index} value={item.categorySlug}>{item.display}</option>
                            ))
                        }
                    </select>
                </div>
                <button type='submit' className='add-btn'>Thêm</button>
            </form>
        </div>
    )
}
export default AddProductView