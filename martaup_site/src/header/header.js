import React from 'react';
import header from '../CSS/header.css';

function Header() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-top">
                        <div className="logo">
                            <a href="#">
                                <img src="" alt="logo" />
                            </a>
                        </div>
                        <div className="menu-bar">
                            <ul className="menu-itemns">
                                <li><a href="#">home</a></li>
                                <li><a href="#">work</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#" id="contact">contact</a></li>
                            </ul>
                        </div>
                        <div className="log-in-bar">

                            <a href="#" className="login">Log in</a>

                            <a href="https://google.com" className="signup">
                                <button id="button">
                                    Sign up
                        </button>
                            </a>
                        </div>
                    </div>
                    {/* <!-- header slider  --> */}
                    <div className="header-slider">
                        {/* <!-- header slider 1 --> */}
                        <div className="header-slider__item">
                            <div className="header-slider__item-content">
                                <div className="header-slider__item-info">
                                    <h3 className="header-slider__title">
                                        We Build Apps & Websites
                                        for Your Business
                            </h3>
                                    <div className="header-slider__discription">
                                        For startups, For businesses & For you
                            </div>
                                    <a href="#" className="header-slider__btn">Request a quote</a>
                                </div>
                                <div className="header-slider__item-images">
                                    <img src="/src/images/header/slider-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- header slider 2 --> */}
                        <div className="header-slider__item">
                            <div className="header-slider__item-content">
                                <div className="header-slider__item-info">
                                    <h3 className="header-slider__title">
                                        We Build Apps & Websites
                                        for Your Business
                            </h3>
                                    <div className="header-slider__discription">
                                        For startups, For businesses & For you
                            </div>
                                    <a href="#" className="header-slider__btn">Request a quote</a>
                                </div>
                                <div className="header-slider__item-images">
                                    <img src="/src/images/header/slider-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- header slider 3 --> */}
                        <div className="header-slider__item">
                            <div className="header-slider__item-content">
                                <div className="header-slider__item-info">
                                    <h3 className="header-slider__title">
                                        We Build Apps & Websites
                                        for Your Business
                            </h3>
                                    <div className="header-slider__discription">
                                        For startups, For businesses & For you
                            </div>
                                    <a href="#" className="header-slider__btn">Request a quote</a>
                                </div>
                                <div className="header-slider__item-images">
                                    <img src="/src/images/header/slider-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- header slider 4 --> */}
                        <div className="header-slider__item">
                            <div className="header-slider__item-content">
                                <div className="header-slider__item-info">
                                    <h3 className="header-slider__title">
                                        We Build Apps & Websites
                                        for Your Business
                            </h3>
                                    <div className="header-slider__discription">
                                        For startups, For businesses & For you
                            </div>
                                    <a href="#" className="header-slider__btn">Request a quote</a>
                                </div>
                                <div className="header-slider__item-images">
                                    <img src="/src/images/header/slider-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- header slider 5 --> */}
                        <div className="header-slider__item">
                            <div className="header-slider__item-content">
                                <div className="header-slider__item-info">
                                    <h3 className="header-slider__title">
                                        We Build Apps & Websites
                                        for Your Business
                            </h3>
                                    <div className="header-slider__discription">
                                        For startups, For businesses & For you
                            </div>
                                    <a href="#" className="header-slider__btn">Request a quote</a>
                                </div>
                                <div className="header-slider__item-images">
                                    <img src="/src/images/header/slider-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>






    )
}

export default Header;