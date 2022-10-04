import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import productData from '../assets/fake-data/products'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

const Search = () => {
    const keyword = useSelector((state) => state.keywordSearch.value)
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({}) // eslint-disable-line
    const keywordRef = useRef()

    useEffect(() => {
        setProducts(productData.getProductByKeyword(keyword))
        setSearchParams({ keyword })
        keywordRef.current.innerText = ` ${keyword}`
        window.scrollTo(0, 0)
    }, [setSearchParams]) // eslint-disable-line

    return (
        <Helmet title="Tìm kiếm">
            <div className="search">
                <div className="search__title">Tìm kiếm được
                    <span> {products.length} </span>
                    sản phẩm với từ khóa
                    <span ref={keywordRef}></span>
                </div>
                <div className="search__result">
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
                </div>
            </div>
        </Helmet>
    )
}

export default Search