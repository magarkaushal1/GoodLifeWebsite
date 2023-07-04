import React from 'react'
import "../assets/Foooter.css"
import { NavLink } from 'react-router-dom'

export default function Foooter() {
    return (
        <>
            <div className='container shadow my-5'>
                <footer id="footer" class="footer wow slideInup animated animated" data-bg-color="#152029">
                    <div class="container py-2">
                        <div className='row'>
                            <div class="col-md-3">
                                <div class="widget">
                                    <div className='elementor-column-wrap'>
                                        <span className='footor-img'>
                                            <NavLink className="logo" to="/">
                                                <img src="/images/logo.png" alt="logo" className="footor-img" />
                                            </NavLink>
                                        </span>
                                        <div className='widget-title'>
                                            <h5>Office Location - Reach us</h5>
                                            <hr className='foooterhr'></hr>
                                        </div>
                                        <ul class="list-inline contact-lists">
                                            <div className='icon-box-wrapper'>
                                                <div className='icon-box-icon'>
                                                    <span className='icon-animation'>
                                                        <i className='fas fa-map-marker-alt'></i>
                                                    </span>
                                                </div>
                                                <div className='icon-box-content'>
                                                    <div className='icon-box-title'>
                                                        <span>
                                                            <a href="/">XJWG+X22, Abukhaireni-Gorkha Hwy, Gorkha 34000</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-box-wrapper'>
                                                <div className='icon-box-icon'>
                                                    <span className='icon-animation'>
                                                        <i className='fas fa-phone-volume'></i>
                                                    </span>
                                                </div>
                                                <div className='icon-box-content'>
                                                    <div className='icon-box-title'>
                                                        <span>
                                                            <a href="/">+9779817120066,
                                                                +9779866282982</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-box-wrapper'>
                                                <div className='icon-box-icon'>
                                                    <span className='icon-animation'>
                                                        <i className='fas fa-envelope'></i>
                                                    </span>
                                                </div>
                                                <div className='icon-box-content'>
                                                    <div className='icon-box-title'>
                                                        <span>
                                                            <a href="/">goodlifeedu@gmail.com</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='icon-box-wrapper'>
                                                <div className='icon-box-icon'>
                                                    <span className='icon-animation'>
                                                        <i className='fas fa-globe'></i>
                                                    </span>
                                                </div>
                                                <div className='icon-box-content'>
                                                    <div className='icon-box-title'>
                                                        <span>
                                                            <a href="/">www.goodlifeedu.np</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-sm-6 col-md-3">
                                        <div class="widget  pl-0">
                                            <div className='widget-title'>
                                                <h5>Useful Links</h5>
                                                <hr className='foooterhr'></hr>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                Home
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/services" className="nav-link p-0 ">
                                                                                Services
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/aboutus" className="nav-link p-0 ">
                                                                                About Us
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/contactus" className="nav-link p-0 ">
                                                                                Contact Us
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/gallery" className="nav-link p-0 ">
                                                                                Gallery
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <div class="widget  pl-0">
                                            <div className='widget-title'>
                                                <h5>Test Preparation</h5>
                                                <hr className='foooterhr'></hr>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                IELTS
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                PTE
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                TOEFL
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                SAT
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                GMAT
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='flag-box-content'>
                                                                    <div className='flag-box-title'>
                                                                        <span className="nav-item mb-2">
                                                                            <NavLink to="/" className="nav-link p-0 ">
                                                                                CAE
                                                                            </NavLink>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <div class="widget  pl-0">
                                            <div className='widget-title'>
                                                <h5>Study Abroad</h5>
                                                <hr className='foooterhr'></hr>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='icon-box-icon'>
                                                                    <span className='icon-animation'>
                                                                        <img src="/flags/japan.png" alt="flag-japan" className="img" />
                                                                    </span>
                                                                </div>
                                                                <div className='icon-box-content'>
                                                                    <div className='icon-box-title'>
                                                                        <span>
                                                                            <a href="/studyinjapan">Japan</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='icon-box-icon'>
                                                                    <span className='icon-animation'>
                                                                        <img src="/flags/australia.png" alt="flag-australia" className="img" />
                                                                    </span>
                                                                </div>
                                                                <div className='icon-box-content'>
                                                                    <div className='icon-box-title'>
                                                                        <span>
                                                                            <a href="/studyinaustralia">Australia</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='icon-box-icon'>
                                                                    <span className='icon-animation'>
                                                                        <img src="/flags/canada.png" alt="flag-canada" className="img" />
                                                                    </span>
                                                                </div>
                                                                <div className='icon-box-content'>
                                                                    <div className='icon-box-title'>
                                                                        <span>
                                                                            <a href="/studyincanada">Canada</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='icon-box-wrapper'>
                                                                <div className='icon-box-icon'>
                                                                    <span className='icon-animation'>
                                                                        <img src="/flags/uk.png" alt="flag-uk" className="img" />
                                                                    </span>
                                                                </div>
                                                                <div className='icon-box-content'>
                                                                    <div className='icon-box-title'>
                                                                        <span>
                                                                            <a href="/studyinuk">UK</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <div class="widget  pl-0">
                                            <div className='widget-title'>
                                                <h5>Social Media</h5>
                                                <hr className='foooterhr'></hr>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <span className='text-socailmedia text-left'>
                                                                <a href="/">
                                                                    <img src="/flags/facebook.png" alt="" className="socialmedia" />
                                                                </a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <span className='text-sociamedia'>
                                                                <a href="/">
                                                                    <img src="/flags/instagram.png" alt="" className="socialmedia" />
                                                                </a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-12">
                                                    <ul id="menu-quick-links" class="">
                                                        <li>
                                                            <div className='col-socialmedia'>
                                                                <span className='text-white'>
                                                                    <a href="/">
                                                                        <img src="/flags/twitter.png" alt="" className="img" />
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom" >
                        <div class="container">
                            <div class="bottom">
                                <p className='font-auto font-12 m-0'>Copyright © 2023 GoodLife Educational Consultancy. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer >
            </div>
        </>
    )
}