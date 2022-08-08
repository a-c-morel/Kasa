import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Accomodation from "./pages/Accomodation"
import Error404 from "./pages/Error404"

export default function App({data}) {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/a-propos" element={<About />}/>
            <Route path="/fiche-logement/:id/*" element={<Accomodation data={data}/>}/>
            <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    )
}