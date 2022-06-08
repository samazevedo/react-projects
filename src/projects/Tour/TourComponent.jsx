import { useState } from 'react'
import { TourComponentStyled } from './TourComponent.styled'

function TourComponent({ id, image, info, price, name }) {
    const [readMore, setReadMore] = useState(false)

    return (
        <TourComponentStyled>
            <img src={image} alt={name} />
            <div className='heading'>
                <h3>{name}</h3>
                <p> ${price}</p>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button
                    className='readmore'
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? 'Show less' : 'Read More'}
                </button>
            </p>

            <button>Delete</button>
        </TourComponentStyled>
    )
}

export default TourComponent
