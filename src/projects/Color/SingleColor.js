import { SingleColorStyled } from './Color.styled'

const SingleColor = ({ color }) => {
    return <SingleColorStyled color={color ? color : '#f1f1f1'} />
}

export default SingleColor
