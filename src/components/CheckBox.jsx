import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
    const inputRef = useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className='custom-checkbox'>
            <input
                ref={inputRef}
                type='checkbox'
                checked={props.checked}
                onChange={onChange}
            />
            <span className='custom-checkbox__checkmark'>
                <i className='bx bx-check'></i>
            </span>
            {props.label}
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
}

export default CheckBox