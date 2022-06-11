import styled from 'styled-components'

export const ReviewStyled = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    align-items: flex-start;
    justify-items: center;
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.xxlarge};
        font-weight: bold;
        text-align: center;
        padding: 0;
        margin: 1rem 0 0 0;
    }
    & .heading {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        align-items: center;
        margin: 0;
        padding: 0;
    }
    & .underline {
        padding: 0;
        margin: 0;
        width: 10rem;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.green};
    }
`
