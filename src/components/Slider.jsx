import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Slider = props => {
    const data = props.data

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, data])

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut)

            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <div className="slider">
            {
                data.map((item, index) => (
                    <div key={index} className={`slider__item ${index === activeSlide ? 'active' : ''}`}>
                        <img src={item.img} alt=""></img>
                    </div>
                ))
            }
            <div className="slider__control">
                <div className="slider__control__item__left" onClick={prevSlide}>
                    <i className="bx bx-chevron-left"></i>
                </div>
                <div className="slider__control__item__central">
                {
                    data.map((item, index) => (
                        <div key={index} className={`slider__control__item__dot ${index === activeSlide ? 'active' : ''}`}>
                        </div>
                    ))
                }
                </div>
                <div className="slider__control__item__right" onClick={nextSlide}>
                    <i className="bx bx-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

export default Slider