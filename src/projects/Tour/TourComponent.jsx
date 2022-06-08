import { TourComponentStyled } from './TourComponent.styled'

function TourComponent({ id, image, info, price, name }) {
    return (
        <TourComponentStyled>
            <img src={image} alt={name} />
            <div className='heading'>
                <h3>{name}</h3>
                <p> ${price}</p>
            </div>
            <p>{info}</p>
            <button>Delete</button>
        </TourComponentStyled>
    )
}

export default TourComponent
