import React from "react"
import '../index.css'
import {Link} from "react-router-dom"

export default function Error404() {
    return (
          <div className="not-found__wrapper">
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <p className="not-found__redirect"><Link to="/">Retourner sur la page d'accueil</Link></p>
          </div>
    );
}