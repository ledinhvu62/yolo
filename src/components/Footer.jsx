import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.svg'

const info = [
    {
        label: 'Mã số thuế',
        value: '1234567890',
        type: 'text',
    },
    {
        label: 'Địa chỉ',
        value: '530 Trương Công Định, Phường 8, Thành phố Vũng Tàu',
        type: 'text',
    },
    {
        label: 'Số điện thoại',
        value: '0123456789',
        type: 'phone',
    },
    {
        label: 'Email',
        value: 'cskh@yolo.vn',
        type: 'mail',
    },
]

const aboutLinks = [
    {
        display: 'Giới thiệu',
        path: '',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
    {
        display: 'Tuyển dụng',
        path: '',
    },
    {
        display: 'Tin tức',
        path: '',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '',
    },
]

const customerSupportLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '',
    },
    {
        display: 'Chính sách bảo hành',
        path: '',
    },
    {
        display: 'Chính sách thanh toán',
        path: '',
    },
    {
        display: 'Chính sách bảo mật',
        path: '',
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
                    <div className='footer__item'>
                        <div className='footer__item__title'>
                            Công ty Cổ phần Yolo
                        </div>
                        <div className='footer__item__content'>
                            {
                                info.map((item, index) => (
                                    item.type === 'text' ? (
                                        <p key={index}>
                                            {`${item.label}: ${item.value}`}
                                        </p>
                                    ) : (
                                        <a key={index} href={`${item.type === 'phone' ? 'tel' : 'mailto'}:${item.value}`}>
                                            {`${item.label}: ${item.value}`}
                                        </a>
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className='footer__item'>
                        <div className='footer__item__title'>
                            Về Yolo
                        </div>
                        <div className='footer__item__content'>
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
                    <div className='footer__item'>
                        <div className='footer__item__title'>
                            Hỗ trợ khách hàng
                        </div>
                        <div className='footer__item__content'>
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
                    <div className='footer__item'>
                        <Link to='/'>
                            <img className='footer__item__logo' src={logo} alt='Logo Yolo' />
                        </Link>
                        <div className='footer__item__title'>
                            Theo dõi chúng tôi tại
                        </div>
                        <div className='footer__item__content'>
                            {
                                socialNetworkLinks.map((item, index) => (
                                    <a key={index} className='footer__item__social-link' href={item.link} target='_blank' rel='noopener noreferrer'>
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