import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Accessories from '../pages/Accessories'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Search from '../pages/Search'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    )
}

export default RoutesApp