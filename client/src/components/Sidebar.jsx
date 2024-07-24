import React from 'react'

const Sidebar = ({ setCurrView }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar__options'>
                <div className='sidebar__options__item' onClick={() => setCurrView('add-product-view')}>
                    <p>Thêm sản phẩm</p>
                </div>
                <div className='sidebar__options__item' onClick={() => setCurrView('list-product-view')}>
                    <p>Danh sách sản phẩm</p>
                </div>
                <div className='sidebar__options__item'>
                    <p>Danh sách đơn hàng</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar