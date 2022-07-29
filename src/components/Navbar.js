import React from "react"
import '../index.css'
import logo from '../assets/navbar-logo.png'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="logo" className="navbar-logo"/>
            </Link>
            <ul className="navbar-menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A Propos</Link></li>
            </ul>
        </nav>
);
}