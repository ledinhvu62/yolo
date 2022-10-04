import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'

const Product = () => {
    const { slug } = useParams()
    const product = productData.getProductBySlug(slug)
    const relatedProducts = productData.getProducts(10)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
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

export default Product