import { useState } from 'react'
import { REVIEWSDATA } from './data'
import { ReviewBox } from './ReviewComponent.styled'
import { FaQuoteRight } from 'react-icons/fa'

function ReviewComponent() {
    const [index, setIndex] = useState(0)
    const [review, setReview] = useState(REVIEWSDATA[index])
    console.log(REVIEWSDATA)
    const { name, text, image, job } = REVIEWSDATA[index]

    return (
        <ReviewBox>
            <div className='img-container'>
                <img src={image} alt={name} />
                <FaQuoteRight className='quote-icon' />
            </div>
            <div>
                <h1>{name}</h1>
                <h2>{job}</h2>
                <p>{text}</p>
            </div>
        </ReviewBox>
    )
}

export default ReviewComponent
