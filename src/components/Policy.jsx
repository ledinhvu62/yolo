import React from 'react'
import PropTypes from 'prop-types'

const Policy = props => {
    const data = props.data

    return (
        <div className='policy'>
            {
                data.map(item => (
                    <div
                        key={item.id}
                        className='policy__item'
                    >
                        <div className='policy__item__image'>
                            <img src={item.img} alt='Ảnh chính sách' />
                        </div>
                        <span className='policy__item__description'>
                            {item.description}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

Policy.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Policy