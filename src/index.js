import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import App from './App'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <div className="main-wrapper">
      <Navbar />
      <App className="app"/>
    </div>
    <Footer />
  </BrowserRouter>
)
