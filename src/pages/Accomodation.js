import React from "react"
import { useParams } from "react-router-dom"
import '../index.css'
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"
import Info from "../components/Info"
import Footer from "../components/Footer"

export default function Accomodation({data}) {
    let {id} = useParams()
    return (
      <>
        <div className="main-wrapper">
          <Navbar />
          {data.filter(accomodation => accomodation.id === id).map((accomodation, id) => (
            <>
            <Gallery accomodation={accomodation}/>
            <Info id={id} accomodation={accomodation}/>
            </>
          ))
          }
        </div>
        <Footer />
      </>
      
    )
}