import React, { useCallback, useEffect, useRef, useState } from 'react'
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

    const selectSlide = (index) => {
        setActiveSlide(index)
    }

    const touchAreaRef = useRef()
    let mouseX, initialX = 0
    let mouseY, initialY = 0
    let isSwiped
    //Events for touch and mouse
    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup",
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend",
        },
    }
    let deviceType = ""
    //Detect touch device
    const isTouchDevice = () => {
        try {
            //Try to create TouchEvent (it would fail for desktops and throw error)
            document.createEvent("TouchEvent")
            deviceType = "touch"
            return true
        } catch (e) {
            deviceType = "mouse"
            return false
        }
    }
    //Get left and top of touchArea
    let rectLeft = touchAreaRef.current ? touchAreaRef.current.getBoundingClientRect().left : 0
    let rectTop = touchAreaRef.current ? touchAreaRef.current.getBoundingClientRect().top : 0
    //Get Exact X and Y position of mouse/touch
    const getXY = (e) => {
        mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft
        mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop
    };
    isTouchDevice()
    //Start Swipe
    touchAreaRef.current && touchAreaRef.current.addEventListener(events[deviceType].down, (event) => {
        isSwiped = true
        //Get X and Y Position
        getXY(event)
        initialX = mouseX
        initialY = mouseY
    });
    //Mousemove / touchmove
    let touchDirection=""
    touchAreaRef.current && touchAreaRef.current.addEventListener(events[deviceType].move, (event) => {
        if (!isTouchDevice()) {
            event.preventDefault()
        }
        if (isSwiped) {
            getXY(event)
            let diffX = mouseX - initialX
            let diffY = mouseY - initialY
            if (Math.abs(diffY) <= Math.abs(diffX)) {
                touchDirection = diffX > 0 ? "right" : "left"
            }
        }
    });
    //Stop Drawing
    touchAreaRef.current && touchAreaRef.current.addEventListener(events[deviceType].up, () => {
        isSwiped = false
        if (touchDirection === "right") {
            prevSlide()
        }
        else {
            nextSlide()
        }
    })
    touchAreaRef.current && touchAreaRef.current.addEventListener("mouseleave", () => {
        isSwiped = false
        if (touchDirection === "right") {
            prevSlide()
        }
        else {
            nextSlide()
        }
    })
    window.onload = () => {
        isSwiped = false
    };

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
        <div ref={touchAreaRef} className="slider touch-area">
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