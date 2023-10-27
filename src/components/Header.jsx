import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import navigationData from '../assets/fake-data/navigation'
import logo from '../assets/images/logo.svg'

import { set, remove } from '../redux/search/keywordSearchSlice'

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems.value)
    const [totalProducts, setTotalProducts] = useState(0)
    
    useEffect(() => {
        setTotalProducts(cartItems.reduce((total, item) => total + (+item.quantity), 0))
    }, [cartItems])
    
    const { pathname } = useLocation()
    const navigationList = navigationData.getAllNavigation()
    const activeNav = navigationList.findIndex(e => e.path === pathname.replace('/', ''))

    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const searchRef = useRef(null)
    const inputSearchRef = useRef(null)
    const searchToggle = () => {
        searchRef.current.classList.toggle('active')
        searchRef.current.classList.contains('active') && inputSearchRef.current.focus()
    }

    const dispatch = useDispatch()
    const keyword = useSelector((state) => state.keywordSearch.value)
    const navigate = useNavigate()

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchToggle()
            navigate('/search')
        }
    }

    useEffect(() => {
        if (pathname !== '/search') {
            dispatch(remove())
        }
    }, [pathname, dispatch])

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__menu'>
                    <div
                        className='header__menu__mobile-toggle'
                        onClick={menuToggle}
                    >
                        <i className='bx bx-menu'></i>
                    </div>
                    <div className='header__logo'>
                        <Link to='/'>
                            <img src={logo} alt='Logo Yolo' />
                        </Link>
                    </div>
                    <div
                        ref={menuLeft}
                        className='header__menu__left'
                    >
                        <div
                            className='header__menu__left__close'
                            onClick={menuToggle}
                        >
                            <i className='bx bx-x'></i>
                        </div>
                        <nav>
                            <ul>
                                {
                                    navigationList.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                            onClick={menuToggle}
                                        >
                                            <Link to={item.path}>
                                                <span>{item.display}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    <div className='header__menu__right'>
                        <div
                            className='header__menu__right__item'
                            onClick={searchToggle}
                        >
                            <i className='bx bx-search'></i>
                        </div>
                        <div className='header__menu__right__item'>
                            <Link to='/cart'>
                                <i className='bx bx-shopping-bag'></i>
                            </Link>
                            <div className={`header__menu__right__item__quantity ${totalProducts > 0 ? 'active' : ''}`}>
                                {totalProducts}
                            </div>
                        </div>
                        <div className='header__menu__right__item'>
                            <Link to=''>
                                <i className='bx bx-user'></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    ref={searchRef}
                    className='header__search-box'
                >
                    <div className='header__search-box__wrapper'>
                        <input
                            ref={inputSearchRef}
                            className='header__search-box__wrapper__input'
                            type='text'
                            value={keyword}
                            placeholder='Tìm kiếm'
                            onChange={e => dispatch(set(e.target.value))}
                            onKeyDown={e => handleKeyDown(e)}
                            spellCheck={false}
                        />
                        <div
                            className='header__search-box__wrapper__search-btn'
                            onClick={searchToggle}
                        >
                            <Link to='/search'>
                                <i className='bx bx-search'></i>
                            </Link>
                        </div>
                    </div>
                    <div
                        className='header__search-box__close-btn'
                        onClick={searchToggle}
                    >
                        <i className='bx bx-x'></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header