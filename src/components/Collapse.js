import React, {useState} from "react"
import '../index.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function Collapse({className, collapseTitle, children}) {
    const [isOpen, setIsOpen] = useState(false)
    //isOpen est la variable d'état que je déclare
    //setIsOpen est une fonction qui permet de modifier l'état actuel (que j'ai mis sur false)

    return isOpen ? (
        <div className={className}>
            <button className="collapse" onClick={() => setIsOpen(false)}>{collapseTitle}<FaChevronUp /></button>
            <ul className="collapse-content">{children}</ul>
        </div>
    ) : (
        <div className={className}>
        <button className="collapse" onClick={() => setIsOpen(true)}>{collapseTitle}<FaChevronDown /></button>
        </div>
    )
}