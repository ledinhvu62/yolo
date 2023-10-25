import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = props => {
    const perLoad = props.videoPerLoad

    const listRef = useRef(null)
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [perLoad, props.data])

    useEffect(() => {
        const handleScrollPage = () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                    setLoad(true)
                }
            }
        }

        window.addEventListener('scroll', handleScrollPage)

        return () => {
            window.removeEventListener('scroll', handleScrollPage)
        }
    }, [])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1)
            }
        }

        getItems()
        setLoad(false)
    }, [load, index, data, perLoad, props.data])

    return (
        <div ref={listRef}>
            <Grid
                col={props.col}
                mdCol={props.mdCol}
                smCol={props.smCol}
                gap={props.gap}
            >
                {
                    data.map((item, index) => (
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
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
    videoPerLoad: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number.isRequired,
    smCol: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
}

export default InfinityList