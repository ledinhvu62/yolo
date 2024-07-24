import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import navigationData from '../assets/fake-data/navigation'

const Breadcrumbs = ({ title }) => {
    const location = useLocation()
    const slugs = location.pathname.split('/')

    return (
        <nav className='breadcrumbs'>
            {
                slugs.map((slug, index) => (
                    <div
                        key={index}
                        className='breadcrumbs__item'
                    >
                        <Link to={`/${slug}`}>
                            {slug ? (navigationData.getNavigation(slug)?.display || title) : 'Trang chủ'}
                        </Link>
                        <span>
                            /
                        </span>
                    </div>
                ))
            }
        </nav>
    )
}

export default Breadcrumbs