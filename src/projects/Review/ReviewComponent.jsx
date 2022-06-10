import { useState } from 'react'
import { REVIEWSDATA } from './data'
import { ReviewBox } from './ReviewComponent.styled'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

function ReviewComponent() {
    const [index, setIndex] = useState(0)
    const { name, text, image, job } = REVIEWSDATA[index]

    // const checkNumber = (num) => {
    //     if (number > REVIEWSDATA.length - 1) {
    //         return 0
    //     }
    //     if (number < 0) {
    //         return REVIEWSDATA.length - 1
    //     }
    //     return number
    // }

    const handleNext = () => {
        setIndex(index + 1)
        if (index + 1 === REVIEWSDATA.length) setIndex(0)
    }
    const handlePrev = () => {
        setIndex(index - 1)
        if (index - 1 === -1) setIndex(REVIEWSDATA.length - 1)
    }

    const handleRandom = () => {
        setIndex(Math.floor(Math.random() * REVIEWSDATA.length))
    }

    return (
        <ReviewBox image={image}>
            <div className='img-container'>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <div className='info'>
                <h1>{name}</h1>
                <h2>{job}</h2>
                <p>{text}</p>
            </div>
            <div className='btn-container'>
                <button className='btn'>
                    <FaChevronLeft onClick={() => handlePrev()} />
                </button>
                <button className='btn' onClick={() => handleNext()}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={() => handleRandom()}>
                Surprise Me
            </button>
        </ReviewBox>
    )
}

export default ReviewComponent
