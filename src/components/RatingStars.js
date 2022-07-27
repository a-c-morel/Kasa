import React from 'react'
import { IoIosStar } from "react-icons/io"

export default function RatingStars({rating}) {
    const emptyStars = Array(5).fill("empty-star")
    const fullStars = Array(5).fill("full-star")

    return (
    <div>
        {fullStars.slice(5-rating).map(fullStar => {
            return <IoIosStar className={fullStar}/>
        })}
        {emptyStars.slice(rating).map(emptyStar => {
            return <IoIosStar className={emptyStar}/>
        })}
    </div>
  )
}
