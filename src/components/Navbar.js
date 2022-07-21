import React from "react"
import '../index.css'
import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" width="500" className="logo"/>
            <ul className="navbar-menu">
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </nav>
);
}