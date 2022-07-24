import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Accomodation from "./pages/Accomodation"
//import Error404 from "./components/Error404"

export default function App() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/a-propos" element={<About />}/>
            <Route path="/fiche-logement/:id" element={<Accomodation />}/>
        </Routes>
      </div>
    )
}