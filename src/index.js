import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import accomodations from './assets/accomodations.json'
import Navbar from './components/Navbar'
import App from './App'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <div className="main-wrapper">
      <Navbar /> {/*Mettre ce composant ici évite de le répéter dans toutes les pages (idem pour le footer)*/}
      <App data={accomodations} className="app"/>
    </div>
    <Footer />
  </BrowserRouter>
)
