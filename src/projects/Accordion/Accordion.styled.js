import styled from 'styled-components'

export const AccordionStyled = styled.main`
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    justify-items: center;
    margin: 0 0 3rem 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.turquise};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    & h3 {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

export const SingleQuestion = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 0 1rem 0;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.4);
    & header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-items: stretch;
    }
    & button {
        display: grid;
        align-items: center;
        justify-items: center;
        border: none;
        border-radius: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        background-color: ${({ theme }) => theme.colors.turquise};
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        & :focus {
            outline: none;
        }
    }
`
