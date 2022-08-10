import { useParams } from "react-router-dom"
import Gallery from "../components/Gallery"
import Info from "../components/Info"
import { Routes, Route } from "react-router-dom"
import Error404 from "./Error404"

export default function Accomodation({data}) {
    let {id} = useParams()
    let idMatching = data.filter(accomodation => accomodation.id === id)
    
    return (idMatching.length>0) ? (
      idMatching.map((accomodation, id) => (
        <div key={id}>
          <Gallery accomodation={accomodation}/>
          <Info id={id} accomodation={accomodation}/>
        </div>
      ))
    ) : (
      <div>
        <Routes>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>  
    )
}