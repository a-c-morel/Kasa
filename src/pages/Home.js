import React from "react"
import '../index.css'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Collapse from "../components/Collapse"

export default function Home() {
    return (
      <>
      <Navbar />
      <Header headTitle="Chez vous, partout et ailleurs"/>
      <Collapse collapseTitle="Titre de mon collapse">
        <li>Test</li>
      </Collapse>
      </>
    )
}