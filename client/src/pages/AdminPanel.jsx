import React, { useState } from 'react'

import Helmet from '../components/Helmet'
import Sidebar from '../components/Sidebar'

import logo from '../assets/images/logo.svg'
import AddProductView from '../components/AddProductView'
import ProductList from '../components/ProductList'

const AdminPanel = () => {
    const [currView, setCurrView] = useState('product-list')

    return (
        <Helmet title='Trang quản trị'>
            <div className="admin__panel">
                <div>
                    <img className='admin__panel__logo' alt='Logo Yolo' src={logo}></img>
                    <p className='admin__panel__title'>Trang quản trị</p>
                </div>
                <div className='admin__panel__sidebar__content'>
                    <Sidebar setCurrView={setCurrView} />
                    <div className='admin__panel__content'>
                        {currView === 'add-product' ? <AddProductView /> : (currView === 'product-list' ? <ProductList setCurrView={setCurrView} /> : <></>)}
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default AdminPanel