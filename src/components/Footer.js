import logo from '../assets/footer-logo.png'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className='footer'>
        <Link to="/">
          <img src={logo} alt="logo" className="logo"/>
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
