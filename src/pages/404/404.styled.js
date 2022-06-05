import styled from 'styled-components'

export const ErrorStyled = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.terciary};
    color: ${({ theme }) => theme.colors.gray};
    letter-spacing: 0.5rem;
    & h1 {
        font-size: 4rem;
    }
    & p {
        font-size: 2rem;
    }
`
