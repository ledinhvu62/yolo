import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
import InfinityList from '../components/InfinityList'

import categoryData from '../assets/fake-data/category'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Category = () => {
    const { categorySlug } = useParams()

    const category = categoryData.getCategory(categorySlug)

    const url = useSelector((state) => state.url.value)
    const [products, setProducts] = useState([])

    const fetchData = useCallback(async (categorySlug) => {
        const response = await axios.get(`${url}/api/v1/products`, { params: { category: categorySlug } })
        if (response.data.success) {
            setProducts(response.data.data)
        }
        else {

        }
    }, [url])

    useEffect(() => {
        fetchData(categorySlug)
    }, [categorySlug, fetchData])

    return (
        <Helmet title={category.display}>
            <Breadcrumbs />
            <InfinityList
                data={products}
                videoPerLoad={10}
                col={5}
                mdCol={3}
                smCol={2}
                gap={20}
            />
        </Helmet>
    )
}

export default Category