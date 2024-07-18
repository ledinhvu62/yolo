import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Category from '../pages/Category'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Search from '../pages/Search'
import Order from '../pages/Order'
import AdminPanel from '../pages/AdminPanel'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:slug' element={<Product />} />
            <Route path='/:categorySlug' element={<Category />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<Search />} />
            <Route path='/order' element={<Order />} />
            <Route path='/admin' element={<AdminPanel />} />
        </Routes>
    )
}

export default RoutesApp