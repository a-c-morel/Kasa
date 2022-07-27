import React from "react"
import { useParams } from "react-router-dom"
import '../index.css'
import Navbar from "../components/Navbar"
import Collapse from "../components/Collapse"
import Gallery from "../components/Gallery"
import { IoIosStar } from "react-icons/io"

export default function Accomodation({data}) {
    let {id} = useParams()
    return (
      <div>
        <Navbar />
        {data.filter(accomodation => accomodation.id === id).map((accomodation, id) => (
          <>
          <Gallery accomodation={accomodation}/>
          <section className="accomodation-info">
            <h1 className="accomodation-info__title" key={id+accomodation.title.length}>{accomodation.title}</h1>
            <p className="accomodation-info__location" key={id+accomodation.location.length}>{accomodation.location}</p>
            <ul className="tags">
              {accomodation.tags.map(tag => {
                  return <li className="tag" key={tag}>{tag}</li>
                }
              )}
            </ul>
            <div className="flex-row-space-between">
              <p className="stars"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
              <div className="identity">
                <p className="identity__name" key={id+accomodation.host.name}>{accomodation.host.name}</p>
                <div className="profile-img-container">
                  <img className="profile-image" src={accomodation.host.picture} alt="profil"/>
                </div>
              </div>
            </div>
            <div className="collapses-container">
              <Collapse collapseTitle="Description">
                <li>{accomodation.description}</li>
              </Collapse>

              <Collapse collapseTitle="Equipements">
                {accomodation.equipments.map(equipment => {
                  return <li key={id+equipment}>{equipment}</li>
                })}
              </Collapse>
            </div>
            
          </section>
          </>
        ))
        }
      </div>
    )
}