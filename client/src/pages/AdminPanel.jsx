import React, { useState } from 'react'

import Helmet from '../components/Helmet'
import Sidebar from '../components/Sidebar'

import logo from '../assets/images/logo.svg'
import AddProductView from '../components/AddProductView'
import ListProductView from '../components/ListProductView'
import { useSelector } from 'react-redux'

const AdminPanel = () => {
    const [currView, setCurrView] = useState('add-product-view')

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
                        {currView === 'add-product-view' ? <AddProductView /> : (currView === 'list-product-view' ? <ListProductView /> : <></>)}
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default AdminPanel