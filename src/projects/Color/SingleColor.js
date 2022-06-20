import { SingleColorStyled } from './Color.styled'
import { useState, useEffect } from 'react'

const SingleColor = ({ color }) => {
    return <SingleColorStyled color={color} />
}

export default SingleColor
