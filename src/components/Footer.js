import React from 'react'
import '../index.css'
import logo from '../assets/footer-logo.png'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="logo" className="logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
