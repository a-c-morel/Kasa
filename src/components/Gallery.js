import {useState} from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function Gallery({accomodation}) {
    const pictures = accomodation.pictures
    const [position, setPosition] = useState(0)

    return position === 0
        ? pictures.length>1 
            ? (
            <div className="gallery-container">
                <div id="gallery-arrow__previous" onClick={() => setPosition(pictures.length-1)}>
                    <IoIosArrowBack />
                </div>
                <div id="gallery-arrow__next" onClick={() => setPosition(position+1)}>
                    <IoIosArrowForward />
                </div>
                <div className="gallery-counter">{(position+1).toString()}/{(pictures.length).toString()}</div>
                <img className="gallery-image" src={pictures[0]} alt="hébergement" />
            </div>
            )
            : (
            <div className="gallery-container">
                <img className="gallery-image" src={pictures[0]} alt="hébergement" />
            </div>
            )
        : (
        <div className="gallery-container">
            <div id="gallery-arrow__previous" onClick={() => position>0 ? setPosition(position-1) : setPosition(pictures.length-1)}>
                <IoIosArrowBack />
            </div>
            <div id="gallery-arrow__next" onClick={() => position<pictures.length-1 ? setPosition(position+1) : setPosition(0)}>
                <IoIosArrowForward />
            </div>
            <div className="gallery-counter">{(position+1).toString()}/{(pictures.length).toString()}</div>
            <img className="gallery-image" src={pictures[position]} alt="hébergement" />
        </div>
            )
}