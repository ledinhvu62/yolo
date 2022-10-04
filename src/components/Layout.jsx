import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RoutesApp from '../routes/RoutesApp'

import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='container'>
                    <div className='main'>
                        <RoutesApp />
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout