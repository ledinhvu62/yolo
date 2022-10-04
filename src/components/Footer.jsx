import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý khiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
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
                        <div className="footer__title">
                            Hỗ trợ khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <Link to="/">
                            <img src={logo} className="footer__logo" alt="" />
                        </Link>
                        <div className="footer__title">
                            Theo dõi chúng tôi tại
                        </div>
                        <div className="footer__content">
                            <a className="footer__social-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                            <a className="footer__social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-instagram"></i>
                            </a>
                            <a className="footer__social-link" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-tiktok" ></i>
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer