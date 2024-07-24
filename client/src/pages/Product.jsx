import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

const Product = () => {
    const { slug } = useParams()
    
    const url = useSelector((state) => state.url.value)
    const [product, setProduct] = useState({
        price: 0,
        name: '',
        color: [],
        size: [],
    })

    const [relatedProducts, setRelatedProducts] = useState([])

    const fetchData = useCallback(async (slug) => {
        const response = await axios.get(`${url}/api/product/query`, { params: { slug } })
        if (response.data.success) {
            setProduct(response.data.data)
        }
    }, [url])

    const getRelatedProducts = useCallback(async (slug) => {
        const response = await axios.get(`${url}/api/product/related-products`, { params: { slug } })
        if (response.data.success) {
            setRelatedProducts(response.data.data)
        }
    }, [url])

    useEffect(() => {
        fetchData(slug)
        getRelatedProducts(slug)
        window.scrollTo(0, 0)
    }, [slug, fetchData, getRelatedProducts])

    return (
        <Helmet title={product.name}>
            <Breadcrumbs title={product.name} />
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Sản phẩm liên quan
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
                                    images={item.images}
                                    name={item.name}
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