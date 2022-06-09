import { ReviewStyled } from './Review.styled'
import ReviewComponent from './ReviewComponent'
function Review() {
    return (
        <ReviewStyled>
            <div className='heading'>
                <h1>Review</h1>
                <div className='underline'></div>
            </div>

            <ReviewComponent />
        </ReviewStyled>
    )
}

export default Review
