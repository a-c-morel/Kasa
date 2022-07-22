import React from "react"
import '../index.css'
//import image à importer from '../assets/'

export default function Header({headTitle}) {
    return (
        <header>
            {/*<img src={image à importer} alt="logo" width="500" className="logo"/>*/}
            <h1>
                {headTitle}
            </h1>
        </header>
);
}