import React, { useEffect } from 'react';
import logo from './logo.png';
import day from './day.svg';
import night from './night.svg';
import './Nav.scss'

import { Link, useNavigate } from "react-router-dom"

function Nav() {

    const userDemo = JSON.parse(localStorage.getItem('demo-login'))
    const navigate = useNavigate()

    const handleLogout = () => {
        window.confirm('Bạn chắc chắn muốn đăng xuất?');
        localStorage.removeItem("demo-login")
        navigate('/')
    }

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    // Nav add class
    const isSticky = () => {
        const nav = document.querySelector('.nav');
        const scrollTop = window.scrollY;
        scrollTop >= 160 ? nav.classList.add('is-sticky') : nav.classList.remove('is-sticky');
    };

    return (
        <div className='nav'>
            <div className="container mx-auto">
                <div className="nav-wrapper">
                    <div className="nav-logo">
                        <Link to="/" className="nav-brand">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-menu">
                        <ul className="nav-list">
                            <li className="list-item">
                                <a href="#">Tham gia group hỗ trợ</a>
                            </li>
                            <li className={userDemo ? 'hover-signout list-item' : 'list-item'}>
                                {userDemo &&
                                    <>
                                        <a>Xin chào, người dùng thử</a>
                                        <ul className="nav-dropdown">
                                            <li><a href="#">Thông tin học viên</a></li>
                                            <li onClick={() => handleLogout()}><a href="#">Đăng xuất</a></li>
                                        </ul>
                                    </>
                                }
                                {!userDemo && <Link to="/dang-nhap">Đăng nhập</Link>}
                            </li>
                            <li className="list-item change-theme">
                                <img className="theme-icon" src={night} alt="night" />
                                <img className="theme-icon active" src={day} alt="day" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;