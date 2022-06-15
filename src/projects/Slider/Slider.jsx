import { SliderStyled } from './Slider.styled'
import {
    FaAngleRight,
    FaHashtag,
    FaQuoteRight,
    FaAngleLeft,
} from 'react-icons/fa'
import { DATA } from './data'
import { BgImage } from '../../components/BgImage/BgImage'
import { useState } from 'react'

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
        if (currentSlide + 1 === DATA.length) {
            setCurrentSlide(0)
        }
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1)
        if (currentSlide - 1 === -1) {
            setCurrentSlide(DATA.length - 1)
        }
    }
    const { image, name, job, quote, id } = DATA[currentSlide]

    return (
        <SliderStyled>
            <header>
                <h1>
                    <FaHashtag /> Reviews
                </h1>
            </header>
            <section className='slider'>
                <div className='slider-item' key={id}>
                    <header className='slider-header'>
                        <figure className='image-container'>
                            <BgImage image={image}></BgImage>
                        </figure>
                        <article className='slider-headings'>
                            <h2>{name}</h2>
                            <p>{job}</p>
                        </article>
                    </header>
                    <div className='icons'>
                        <FaAngleLeft
                            className='left'
                            onClick={() => prevSlide()}
                        />
                        <FaAngleRight
                            className='right'
                            onClick={() => nextSlide()}
                        />
                    </div>
                    <div className='quote'>
                        <p>{quote}</p>
                        <FaQuoteRight />
                    </div>
                </div>
            </section>
        </SliderStyled>
    )
}

export default Slider
