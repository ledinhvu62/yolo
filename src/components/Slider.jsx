import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../node_modules/swiped-events/dist/swiped-events.min.js'

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

    const selectSlide = (index) => {
        setActiveSlide(index)
    }

    const touchAreaRef = useRef()

    if (touchAreaRef.current) {
        touchAreaRef.current.addEventListener('swiped-left', function (e) {
            nextSlide()
        })

        touchAreaRef.current.addEventListener('swiped-right', function (e) {
            prevSlide()
        })
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
        <div ref={touchAreaRef} className="slider" data-swipe-ignore="false" data-swipe-timeout="500" data-swipe-unit="px" data-swipe-threshold="20">
            {
                data.map((item, index) => (
                    <div key={index} className={`slider__item ${index === activeSlide ? 'active' : ''}`}>
                        <Link to={`${item.path}`}>
                            <img src={item.img} alt=""></img>
                        </Link>
                    </div>
                ))
            }
            <div className="slider__btn-prev" onClick={prevSlide}>
                <i className="bx bx-chevron-left"></i>
            </div>
            <div className="slider__dot">
                {
                    data.map((item, index) => (
                        <div
                            key={index}
                            className={`slider__dot__item ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => selectSlide(index)}
                        >
                        </div>
                    ))
                }
            </div>
            <div className="slider__btn-next" onClick={nextSlide}>
                <i className="bx bx-chevron-right"></i>
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