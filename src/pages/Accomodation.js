import React from "react"
import '../index.css'
import Navbar from "../components/Navbar"
import Collapse from "../components/Collapse"

export default function Accomodation() {
    return (
      <div>
        <Navbar />
        <h1>Accomodation</h1>
        <Collapse collapseTitle="Titre de mon collapse">
        <li>Test</li>
        </Collapse>
      </div>
    );
}