import styled from 'styled-components'

export const ReviewStyled = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    & .heading {
        display: grid;
        grid-template-rows: 1.7fr 0.3fr;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
    & .underline {
        padding: 0;
        margin: 0;
        width: 10rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.green};
    }
    & h1 {
        margin-top: 20vh;
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        padding: 0;
    }
`
