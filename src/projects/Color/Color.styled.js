import styled from 'styled-components'

export const ColorStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    align-items: center;
    justify-items: center;
    & input.error {
        border: 2px solid red;
    }
`
export const SingleColorStyled = styled.article`
    display: grid;
    width: 200px;
    height: 200px;
    background-color: ${({ color }) => color};
`
