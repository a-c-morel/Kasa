import { IoIosStar } from "react-icons/io"

export default function RatingStars({id, rating}) {
    const emptyStars = Array(5).fill("empty-star")
    const fullStars = Array(5).fill("full-star")

    return (
    <div>
        {fullStars.slice(5-rating).map((fullStar, index) => {
            return <IoIosStar key={id+index} className={fullStar}/>
        })}
        {emptyStars.slice(rating).map((emptyStar, index) => {
            return <IoIosStar key={id+index} className={emptyStar}/>
        })}
    </div>
  )
}
