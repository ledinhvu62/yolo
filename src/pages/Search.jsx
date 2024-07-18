import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Helmet from '../components/Helmet'
import InfinityList from '../components/InfinityList'

const Search = () => {
    const keyword = useSelector((state) => state.keywordSearch.value)

    const keywordRef = useRef(null)
    const [products, setProducts] = useState([]) // eslint-disable-line
    const [searchParams, setSearchParams] = useSearchParams({}) // eslint-disable-line

    useEffect(() => {
        //setProducts(productData.getProductByKeyword(keyword))
        setSearchParams({ keyword })
        keywordRef.current.innerText = ` ${keyword}`
        window.scrollTo(0, 0)
    }, [setSearchParams]) // eslint-disable-line

/*     const getProductByKeyword = (keywordSearch) => {
        const keywordStandard = removeVietnameseTones(keywordSearch)
        if (!keywordStandard) {
            return []
        }
    
        const keywords = keywordStandard.split(' ')
        return products.filter((product) => {
            return keywords.some((keyword) => product.slug.toLowerCase().includes(keyword.toLowerCase()))
        })
    } */

    return (
        <Helmet title='Tìm kiếm'>
            <div className='search'>
                <h2 className='search__title'>
                    Tìm kiếm
                </h2>
                <div className='search__txt'>
                    Tìm kiếm được
                    <span> {products.length} </span>
                    sản phẩm với từ khóa
                    <span ref={keywordRef}></span>
                </div>
                <div className='search__result'>
                    <InfinityList
                        data={products}
                        videoPerLoad={10}
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Search