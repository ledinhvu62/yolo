import React from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
import Section, { SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import productData from '../assets/fake-data/products'
import categoryData from '../assets/fake-data/category'

const Category = () => {
    const { categorySlug } = useParams()

    const products = productData.getProductsByCategorySlug(categorySlug)
    const category = categoryData.getCategory(categorySlug)

    return (
        <Helmet title={category.display}>
            <Breadcrumbs />
            <Section>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {
                            products.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={+item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Category