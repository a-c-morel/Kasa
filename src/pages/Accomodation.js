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
          <h1 key={id}>{accomodation.title}</h1>
        ))
        }
        <Collapse collapseTitle="Titre de mon collapse">
        <li>Test</li>
        </Collapse>
      </div>
    );
}