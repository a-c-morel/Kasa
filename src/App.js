import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Accomodation from "./pages/Accomodation"
import accomodations from "./assets/accomodations.json"
import Error404 from "./pages/Error404"

export default function App() {
    return (
      <div>
        <Routes>
            <Route path="/MORELAdeline_11_20072022" element={<Home />}/>
            <Route path="/a-propos" element={<About />}/>
            <Route path="/fiche-logement/:id" element={<Accomodation data={accomodations}/>}/>
            <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    )
}