import React, {useState} from "react"
import '../index.css'

export default function Collapse({collapseTitle, children}) {
    const [isOpen, setIsOpen] = useState(false)
    //isOpen est la variable d'état que je déclare
    //setIsOpen est une fonction qui permet de modifier l'état actuel (que j'ai mis sur false)

    return isOpen ? (
        <>
            <button onClick={() => setIsOpen(false)}>{collapseTitle}</button>
            <ul className="collapse-content">{children}</ul>
        </>
    ) : (
        <button onClick={() => setIsOpen(true)}>{collapseTitle}</button>
    )
}