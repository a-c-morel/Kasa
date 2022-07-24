import React from "react"
import '../index.css'

export default function Card({title}) {
    return (
        <article className="card">
            <p>{title}</p>
        </article>
    );
}