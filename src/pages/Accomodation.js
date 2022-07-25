import React from "react"
import { useParams } from "react-router-dom"
import '../index.css'
import Navbar from "../components/Navbar"
import Collapse from "../components/Collapse"

export default function Accomodation({data}) {
    let {id} = useParams()
    return (
      <div>
        <Navbar />
        {data.filter(accomodation => accomodation.id === id).map((accomodation, id) => (
          <section className="accomodation-info">
            <div className="flex-row-space-between">
              <h1 key={id}>{accomodation.title}</h1>
              <div className="flex-row-space-between">
                <p key={id+accomodation.host.name}>{accomodation.host.name}</p>
                <img src={accomodation.host.picture} alt="profil"/>
              </div>
              
            </div>
            <Collapse collapseTitle="Titre de mon collapse">
              <li>Test</li>
            </Collapse>
          </section>
        ))
        }
      </div>
    )
}