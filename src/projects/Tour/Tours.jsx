import TourComponent from './TourComponent'
import { ToursStyled } from './Tours.styled'

const Tours = ({ tours }) => {
    return (
        <ToursStyled>
            <div className='title'>
                <h2>Tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <TourComponent key={tour.id} {...tour} />
                })}
            </div>
        </ToursStyled>
    )
}

export default Tours
