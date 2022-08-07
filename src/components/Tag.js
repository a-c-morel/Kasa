import React from "react"
import '../index.css'

export default function Tag({tag}) {
    return (
        <li className="tag">{tag}</li>
    );
}