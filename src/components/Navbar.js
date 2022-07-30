import React from "react"
import '../index.css'
import logo from '../assets/navbar-logo.png'
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/MORELAdeline_11_20072022">
                <img src={logo} alt="logo" className="navbar-logo"/>
            </NavLink>
            <ul className="navbar-menu">
                <li><NavLink to="/MORELAdeline_11_20072022"  className={({ isActive }) => (isActive ? "navbar__link--active" : "navbar__link")}>Accueil</NavLink></li>
                <li><NavLink to="/a-propos"  className={({ isActive }) => (isActive ? "navbar__link--active" : "navbar__link")}>A Propos</NavLink></li>
            </ul>
        </nav>
    )
}