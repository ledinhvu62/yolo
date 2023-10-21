import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.svg'

const info = [
    'Mã số thuế: 1234567890',
    'Địa chỉ: Số 04 Phan Chu Trinh, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh',
    'Số điện thoại: 0123456789',
    'Email: cskh@yolo.vn',
]

const aboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/about',
    },
]

const customerSupportLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách thanh toán',
        path: '/about',
    },
    {
        display: 'Chính sách bảo mật',
        path: '/about',
    },
]

const socialNetworkLinks = [
    {
        link: 'https://www.facebook.com',
        icon: 'bx bxl-facebook',
    },
    {
        link: 'https://www.instagram.com',
        icon: 'bx bxl-instagram',
    },
    {
        link: 'https://www.tiktok.com',
        icon: 'bx bxl-tiktok',
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className='footer__title'>
                            Công ty Cổ phần Yolo
                        </div>
                        <div className='footer__content'>
                            {
                                info.map((item, index) => (
                                    <p key={index}>
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='footer__title'>
                            Về Yolo
                        </div>
                        <div className='footer__content'>
                            {
                                aboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='footer__title'>
                            Hỗ trợ khách hàng
                        </div>
                        <div className='footer__content'>
                            {
                                customerSupportLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='footer__about'>
                        <Link to='/'>
                            <img className='footer__logo' src={logo} alt='Logo Yolo' />
                        </Link>
                        <div className='footer__title'>
                            Theo dõi chúng tôi tại
                        </div>
                        <div className='footer__content'>
                            {
                                socialNetworkLinks.map((item, index) => (
                                    <a key={index} className='footer__social-link' href={item.link} target='_blank' rel='noopener noreferrer'>
                                        <i className={item.icon}></i>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Grid>
                <div className='footer__copyright'>
                    <hr />
                    <p>© YOLO - Bản quyền thuộc về Công ty Cổ phần Yolo</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer