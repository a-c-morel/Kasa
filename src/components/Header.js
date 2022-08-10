import React from "react"

export default function Header({headTitle}) {
    return (
        <header className="head-title">
            <div className="mask">
                <h1>{headTitle}</h1>
            </div>
        </header>
);
}