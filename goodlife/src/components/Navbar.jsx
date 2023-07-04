import React from 'react'
import Head from './Head'
import "../assets/Navbar.css"
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

export const Navbar = () => {
    let activeStyle = {
        fontSize: "1.2em",
    }
    return (
        <>
            <Head />
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-bg-dark navbar-light shadow  ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">
                            <img src="/images/logo.png" alt="logo" className="img" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <NavLink className="nav-link active " aria-current="page" to="/"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }
                                    >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavDropdown title="Study Abroad" className='dropdown' id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/studyinjapan">Study at Japan</NavDropdown.Item>
                                        <NavDropdown.Item href="/studyinaustralia">Study at Australia</NavDropdown.Item>
                                        <NavDropdown.Item href="/studyinuk">Study at UK</NavDropdown.Item>
                                        <NavDropdown.Item href="/studyincanada">Study at Canada</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavDropdown title="Test Preparation" className='dropdown' id="basic-nav-dropdown" >
                                        <NavDropdown.Item href="/">ILETS</NavDropdown.Item>
                                        <NavDropdown.Item href="">PTE</NavDropdown.Item>
                                        <NavDropdown.Item href="/">TOEFLL</NavDropdown.Item>
                                        <NavDropdown.Item href="">SAT</NavDropdown.Item>
                                        <NavDropdown.Item href="/">GMAT</NavDropdown.Item>
                                        <NavDropdown.Item href="">CAE</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gallery"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/testimonial"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>Testimonial</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/aboutus"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contactus"
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="button">
                                <button className="btn btn-outline-primary text-white" type="submit">Apply Now</button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar