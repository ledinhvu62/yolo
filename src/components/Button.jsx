import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const color = props.color ? 'color-' + props.color : 'color-white'
    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'
    const size = props.size ? 'btn-' + props.size : ''
    const animate = props.animate ? 'btn-animate' : ''

    return (
        <button
            className={`btn ${color} ${bg} ${size} ${animate}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className='btn__txt'>
                {props.children}
            </span>
            {
                props.icon ? (
                    <span className='btn__icon'>
                        <i className={`${props.icon} bx-tada`}></i>
                    </span>
                ) : null
            }
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button