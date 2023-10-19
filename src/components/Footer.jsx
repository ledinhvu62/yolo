import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about",
    },
    {
        display: "Liên hệ",
        path: "/contact",
    },
    {
        display: "Tuyển dụng",
        path: "/about",
    },
    {
        display: "Tin tức",
        path: "/about",
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about",
    },
]

const footerCustomerSupportLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about",
    },
    {
        display: "Chính sách bảo hành",
        path: "/about",
    },
    {
        display: "Chính sách thanh toán",
        path: "/about",
    },
    {
        display: "Chính sách bảo mật",
        path: "/about",
    },
]

const footerInfo = [
    "Mã số thuế: 1234567890",
    "Địa chỉ: Số 04 Phan Chu Trinh, P.12, Q.Bình Thạnh, TP.Hồ Chí Minh",
    "Số điện thoại: 0123456789",
    "Email: cskh@yolo.vn",
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
                            Công ty Cổ phần Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerInfo.map((item, index) => (
                                    <p key={index}>
                                        {item}
                                    </p>
                                ))
                            }
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
                                footerCustomerSupportLinks.map((item, index) => (
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
                            <img src={logo} className="footer__logo" alt="Logo Yolo" />
                        </Link>
                        <div className="footer__title">
                            Theo dõi chúng tôi tại
                        </div>
                        <div className="footer__content">
                            <a className="footer__social-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="bx bxl-facebook"></i>
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
                <div className="footer__copyright">
                    <hr/>
                    <p>© YOLO - Bản quyền thuộc về Công ty Cổ phần Yolo</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer