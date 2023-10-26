import React, { useCallback, useEffect, useRef, useState } from 'react'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

import productData from '../assets/fake-data/products'
import categoryData from '../assets/fake-data/category'
import colorData from '../assets/fake-data/product-color'
import sizeData from '../assets/fake-data/product-size'

const Catalog = () => {
    const initFilter = {
        category: [],
        color: [],
        size: [],
    }

    const productList = productData.getAllProducts()
    const categoryList = categoryData.getAllCategories()
    const colorList = colorData.getAllColors()
    const sizeList = sizeData.getAllSizes()

    const filterRef = useRef(null)
    const [products, setProducts] = useState(productList)
    const [filter, setFilter] = useState(initFilter)

    const clearFilter = () => setFilter(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({
                        ...filter,
                        category: [...filter.category, item.categorySlug],
                    })
                    break
                case 'COLOR':
                    setFilter({
                        ...filter,
                        color: [...filter.color, item.color],
                    })
                    break
                case 'SIZE':
                    setFilter({
                        ...filter,
                        size: [...filter.size, item.size],
                    })
                    break
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({
                        ...filter,
                        category: newCategory,
                    })
                    break
                case 'COLOR':
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({
                        ...filter,
                        color: newColor,
                    })
                    break
                case 'SIZE':
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({
                        ...filter,
                        size: newSize,
                    })
                    break
                default:
            }
        }
    }

    const updateProducts = useCallback(() => {
        let temp = productList

        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug))
        }

        if (filter.color.length > 0) {
            temp = temp.filter(e => {
                const check = e.colors.find(color => filter.color.includes(color))
                return check !== undefined
            })
        }

        if (filter.size.length > 0) {
            temp = temp.filter(e => {
                const check = e.size.find(size => filter.size.includes(size))
                return check !== undefined
            })
        }

        setProducts(temp)
    }, [filter, productList])

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title='Sản phẩm'>
            <Breadcrumbs />
            <div className='catalog'>
                <div
                    ref={filterRef}
                    className='catalog__filter'
                >
                    <div
                        className='catalog__filter__btn-close'
                        onClick={() => showHideFilter()}
                    >
                        <i className='bx bx-x'></i>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>
                            Loại sản phẩm
                        </div>
                        <div className='catalog__filter__widget__content'>
                            {
                                categoryList.map((item, index) => (
                                    <div
                                        key={index}
                                        className='catalog__filter__widget__content__item'
                                    >
                                        <CheckBox
                                            label={item.display}
                                            checked={filter.category.includes(item.categorySlug)}
                                            onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>
                            Màu sắc
                        </div>
                        <div className='catalog__filter__widget__content'>
                            {
                                colorList.map((item, index) => (
                                    <div
                                        key={index}
                                        className='catalog__filter__widget__content__item'
                                    >
                                        <CheckBox
                                            label={item.display}
                                            checked={filter.color.includes(item.color)}
                                            onChange={(input) => filterSelect('COLOR', input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__title'>
                            Kích cỡ
                        </div>
                        <div className='catalog__filter__widget__content'>
                            {
                                sizeList.map((item, index) => (
                                    <div
                                        key={index}
                                        className='catalog__filter__widget__content__item'
                                    >
                                        <CheckBox
                                            label={item.display}
                                            checked={filter.size.includes(item.size)}
                                            onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='catalog__filter__widget'>
                        <div className='catalog__filter__widget__content'>
                            <Button
                                size='block'
                                onClick={clearFilter}
                            >
                                Xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='catalog__filter__toggle'>
                    <Button
                        size='sm'
                        onClick={() => showHideFilter()}
                    >
                        Bộ lọc
                    </Button>
                </div>
                <div className='catalog__content'>
                    <InfinityList
                        data={products}
                        videoPerLoad={8}
                        col={4}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog