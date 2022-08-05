import React from "react"
import { useParams } from "react-router-dom"
import '../index.css'
import Gallery from "../components/Gallery"
import Info from "../components/Info"

export default function Accomodation({data}) {
    let {id} = useParams()
    return (
      <>
        {data.filter(accomodation => accomodation.id === id).map((accomodation, id) => (
          <div key={id}>
            <Gallery accomodation={accomodation}/>
            <Info id={id} accomodation={accomodation}/>
          </div>
        ))
        }
      </>
      
    )
}