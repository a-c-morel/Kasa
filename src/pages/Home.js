import React from "react"
import '../index.css'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import accomodations from "../assets/accomodations.json"
import Card from "../components/Card"
import {Link} from "react-router-dom"
//import Collapse from "../components/Collapse"

export default function Home() {
    return (
      <>
      <Navbar />
      <Header headTitle="Chez vous, partout et ailleurs"/>
      {
        accomodations.map(
          accomodation => {
            let whereTo = `/fiche-logement/`+ accomodation.id
            return(
              <Link to={whereTo} key={accomodation.rating+accomodation.id}>
                <Card title={accomodation.title} key={accomodation.id}/>
              </Link>
            )
          }
        )
      }
      </>
    )
}