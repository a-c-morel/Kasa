import React from "react"
import Collapse from "../components/Collapse"
import image from '../assets/about-image.jpg'
import '../index.css'

export default function About() {
    return (
      <>
        <div className="about-image__wrapper">
          <img src={image} alt="kluane national parc et réserve" className="about-image"/>
        </div>
        <section className="about-info">
          <Collapse className="collapse-container--about" collapseTitle="Fiabilité">
            <li>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</li>
          </Collapse>
          <Collapse className="collapse-container--about" collapseTitle="Respect">
            <li>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</li>
          </Collapse>
          <Collapse className="collapse-container--about" collapseTitle="Service">
            <li>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</li>
          </Collapse>
          <Collapse className="collapse-container--about" collapseTitle="Sécurité">
            <li>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</li>
          </Collapse>
        </section>
      </>
    );
}