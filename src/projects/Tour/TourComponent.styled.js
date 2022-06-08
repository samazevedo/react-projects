import styled from 'styled-components'

export const TourComponentStyled = styled.article`
    width: 100%;
    max-width: 30rem;
    height: 100%;
    margin-bottom: 5rem;
    padding: 3rem;
    border-radius: 0.2rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    & h3 {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
    & p {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    }
    & .heading {
        display: grid;
        grid-template-columns: 1.8fr 0.2fr;
        align-items: center;
        & p {
            text-align: center;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            color: ${({ theme }) => theme.colors.darkblue};
            background-color: ${({ theme }) => theme.colors.lightblue};
        }
    }

    & button {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: 0.2rem;
        padding: 0.5rem;
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.colors.red};
            color: ${({ theme }) => theme.colors.white};

            &:active {
                background-color: ${({ theme }) => theme.colors.red};
                color: ${({ theme }) => theme.colors.white};
                transform: scale(0.99);
            }
        }
    }
`
