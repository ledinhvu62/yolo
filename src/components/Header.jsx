import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { set, remove } from '../redux/search/keywordSearchSlice'

import logo from '../assets/images/logo.png'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Sale",
        path: "/sale"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems.value)
    const [totalProducts, setTotalProducts] = useState(0)

    useEffect(() => {
        setTotalProducts(cartItems.reduce((total, item) => total + (+item.quantity), 0))
    }, [cartItems])

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    const handleScroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('shrink')
        } else {
            headerRef.current.classList.remove('shrink')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const searchRef = useRef(null)
    const searchToggle = () => searchRef.current.classList.toggle('active')

    const dispatch = useDispatch()
    const keyword = useSelector((state) => state.keywordSearch.value)
    const navigate = useNavigate()

    useEffect(() => {
        if (pathname !== '/search') {
            dispatch(remove())
        }
    }, [pathname, dispatch])

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="Logo Yolo" />
                        </Link>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className="header__search" ref={searchRef}>
                        <input
                            className="header__search__input"
                            value={keyword}
                            type="text"
                            placeholder="Tìm kiếm"
                            onChange={e => dispatch(set(e.target.value))}
                            onKeyDown={e => e.key === 'Enter' && navigate('/search')}
                        />
                        <div className="header__search__btn" onClick={searchToggle}>
                            <Link to="/search">
                                <i className="bx bx-search"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item" onClick={searchToggle}>
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                            <div className={`header__menu__right__item__quantity ${totalProducts > 0 ? 'active' : ''}`}>
                                {totalProducts}
                            </div>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header