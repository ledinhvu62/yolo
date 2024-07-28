import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const color = props.color ? 'color-' + props.color : 'color-white'
    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'
    const size = props.size ? 'btn-' + props.size : ''

    return (
        <button
            className={`btn ${color} ${bg} ${size}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
             {
                props.icon ? (
                    <span className='btn__icon'>
                        <i className={`${props.icon}`}></i>
                    </span>
                ) : null
            }
            <span className='btn__txt'>
                {props.children}
            </span>
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button