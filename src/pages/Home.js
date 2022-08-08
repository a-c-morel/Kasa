import React from "react"
import '../index.css'
import Header from "../components/Header"
import Card from "../components/Card"
import {Link} from "react-router-dom"

export default function Home({data}) {
    return (
      <>
        <Header headTitle="Chez vous, partout et ailleurs"/>
        <section className="cards-section">
          {
            data.map(
              accomodation => {
                let whereTo = `/fiche-logement/`+ accomodation.id
                return(
                  <Link to={whereTo} key={accomodation.id}>
                    <Card image={accomodation.cover} title={accomodation.title} />
                  </Link>
                )
              }
            )
          }
        </section>
      </>
    )
}