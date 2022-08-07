import React from "react"
import '../index.css'

export default function Card({image, title}) {
    return (
        <article className="card">
            <img src={image} alt="cover"/>
            <div className="card-gradient"></div>
            <p>{title}</p>
        </article>
    );
}