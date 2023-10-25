import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
import InfinityList from '../components/InfinityList'

import productData from '../assets/fake-data/products'
import categoryData from '../assets/fake-data/category'

const Category = () => {
    const { categorySlug } = useParams()

    const products = productData.getProductsByCategorySlug(categorySlug)
    const category = categoryData.getCategory(categorySlug)

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