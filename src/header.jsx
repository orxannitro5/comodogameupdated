import React, { useState } from "react";
import "./header.css";
import comodologo from "./assets/comodologo.webp";
import { Routes, Route, NavLink, useNavigate  } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import Pricing from "./pricing";
import Blog from "./blog";
import Contact from "./contact";
import ViewMore from "./view-more";
import LoginPage from "./loginPage";
import ProtectedRoutes from "./protectedRoutes";
import AdminPanel from "./adminPanel"



export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const refreshFunc = () => {
        navigate("/login");

    };
    return (
        <>
            <div className="header-main">
                <div className="header-main-content">
                    <img onClick={refreshFunc} className="nav-logo" src={comodologo} alt="" />
                    <div className="nav-menu">
                        <NavLink to="/home" exact activeClassName="active" className="nav-link">HOME</NavLink>
                        <NavLink to="/about" activeClassName="active" className="nav-link">ABOUT</NavLink>
                        <NavLink to="/gallery" activeClassName="active" className="nav-link">GALLERY</NavLink>
                        <NavLink to="/pricing" activeClassName="active" className="nav-link">PRICING</NavLink>
                        <NavLink to="/blog" activeClassName="active" className="nav-link">BLOG</NavLink>
                        <NavLink to="/contact" activeClassName="active" className="nav-link">CONTACT</NavLink>
                        <NavLink to="/admin" activeClassName="active" className="nav-link">Admin</NavLink>
                    </div>
                    <button className="header-button">JOIN US</button>
                    <div className="burger-icon" onClick={toggleMenu}>
                        {isMenuOpen ? "X" : '☰'}

                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="burger-menu-block">
                    <div className="burger-menu-block-contaniner">
                        <NavLink to="/home" exact activeClassName="active" className="burger-menu-block-nav">HOME</NavLink>
                        <NavLink to="/about" activeClassName="active" className="burger-menu-block-nav">ABOUT</NavLink>
                        <NavLink to="/gallery" activeClassName="active" className="burger-menu-block-nav">GALLERY</NavLink>
                        <NavLink to="/pricing" activeClassName="active" className="burger-menu-block-nav">PRICING</NavLink>
                        <NavLink to="/blog" activeClassName="active" className="burger-menu-block-nav">BLOG</NavLink>
                        <NavLink to="/contact" activeClassName="active" className="burger-menu-block-nav">CONTACT</NavLink>
                    </div>
                </div>
            )}
            <Routes>

                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/viewmore" element={<ViewMore />} />
                    <Route path="/admin" element={<AdminPanel />} />

                    
                </Route>








            </Routes>
        </>
    );
}