import React from "react"
import '../index.css'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import accomodations from "../assets/accomodations.json"
import Card from "../components/Card"
//import Collapse from "../components/Collapse"

export default function Home() {
    return (
      <>
      <Navbar />
      <Header headTitle="Chez vous, partout et ailleurs"/>
      {
        accomodations.map(
          accomodation => {
            return(
              <Card title={accomodation.title} key={accomodation.id}/>
            )
          }
        )
      }
      </>
    )
}