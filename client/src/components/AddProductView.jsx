import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import changeToSlug from '../utils/changeToSlug'
import CheckBox from './CheckBox'

import showToast from '../utils/showToast'

import categoryData from '../assets/fake-data/category'
import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'

const AddProductView = () => {
    const url = useSelector((state) => state.url.value)

    const categories = categoryData.getAllCategories()
    const colors = colorData.getAllColors()
    const sizes = sizeData.getAllSizes()

    const [images, setImages] = useState([])

    const initData = {
        name: '',
        description: '',
        price: '',
        color: [],
        size: [],
        categorySlug: 'ao-polo',
    }

    const [data, setData] = useState(initData)

    const filterSelect = (type, checked, value) => {
        if (checked) {
            switch (type) {
                case 'COLOR':
                    setData({
                        ...data,
                        color: colorData.sortColors([...data.color, value]),
                    })
                    break
                case 'SIZE':
                    setData({
                        ...data,
                        size: sizeData.sortSizes([...data.size, value]),
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
            showToast(response.data.message, 'success')
            setData(initData)
            setImages([])
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='add__product__view'>
            <form action='' className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add__product__view__form__item flex-col image'>
                    <p>Ảnh sản phẩm 1</p>
                    <input onChange={(e) => {
                        let newArr = [...images]
                        newArr[0] = e.target.files[0]
                        setImages(newArr)
                    }} type='file' id='images' required />
                </div>
                <div className='add__product__view__form__item flex-col image'>
                    <p>Ảnh sản phẩm 2</p>
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
                            colors.map((item, index) => (
                                <CheckBox
                                    key={index}
                                    label={item.name}
                                    checked={data.color.includes(item.name)}
                                    onChange={(input) => filterSelect('COLOR', input.checked, item.name)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Kích cỡ</p>
                    <div className='add__product__view__form__checkbox'>
                        {
                            sizes.map((item, index) => (
                                <CheckBox
                                    key={index}
                                    label={item}
                                    checked={data.size.includes(item)}
                                    onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='add__product__view__form__item flex-col'>
                    <p>Loại</p>
                    <select onChange={onChangeHandler} name='categorySlug' required>
                        {
                            categories.map((item, index) => (
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