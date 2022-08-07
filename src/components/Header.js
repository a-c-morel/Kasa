import React from "react"
import '../index.css'

export default function Header({headTitle}) {
    return (
        <header className="head-title">
            <div className="mask">
                <h1>{headTitle}</h1>
            </div>
        </header>
);
}