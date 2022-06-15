import styled from 'styled-components'

export const TabStyled = styled.main`
    display: grid;
    grid-template-rows: 0.8fr 1.2fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    font-family: arial;
    & header {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1.5fr 0.5fr;
        align-items: center;
        justify-items: center;
        h2 {
            font-size: ${({ theme }) => theme.fontSizes.xxlarge};
            margin: 0;
            padding: 0;
        }
        & .underscore {
            width: 10rem;
            height: 0.2rem;
            background-color: ${({ theme }) => theme.colors.violet};
            margin: 1rem;
            padding: 0;
        }
    }
    & .info {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        margin-top: 2rem;
    }
    & .job-info {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fit, 1fr);
        align-items: center;
        justify-items: center;
        & article {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            align-items: center;
            & h3 {
                font-size: ${({ theme }) => theme.fontSizes.large};
                margin: 0;
                padding: 0;
                letter-spacing: 0.2rem;
                font-weight: 400;
            }
            & h4 {
                font-size: ${({ theme }) => theme.fontSizes.xsmall};
                margin: 0;
                padding: 0;
                color: ${({ theme }) => theme.colors.gray};
                background-color: ${({ theme }) => theme.colors.lightviolet};
                padding: 0.2rem;
                border-radius: 0.2rem;
                width: fit-content;
                text-transform: uppercase;
                font-weight: 100;
            }
            & h5 {
                font-size: ${({ theme }) => theme.fontSizes.small};
                margin: 0;
                padding: 0;
                color: ${({ theme }) => theme.colors.gray};
                font-weight: 400;
            }
            & p {
                font-size: ${({ theme }) => theme.fontSizes.small};
                color: ${({ theme }) => theme.colors.darkgray};
                font-weight: 400;
            }
            & .icon {
                font-size: ${({ theme }) => theme.fontSizes.xsmall};
                padding: 0 0.5rem;
                color: ${({ theme }) => theme.colors.violet};
            }
        }
        & button {
            border: none;
            background-color: ${({ theme }) => theme.colors.violet};
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSizes.small};
            padding: 0.5rem 3rem 0.5rem 3rem;
            border-radius: 0.2rem;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: ${({ theme }) => theme.colors.yellow};
                color: ${({ theme }) => theme.colors.violet};
            }
            &:active {
                transform: scale(0.95);
            }
        }
    }
`
export const TabMenuStyled = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: flex-start;
    justify-items: center;
    & ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        align-items: flex-start;
        justify-items: start;
        width: 100%;
        & button {
            border: none;
            font-size: ${({ theme }) => theme.fontSizes.small};
            font-family: arial;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.gray};
            background-color: transparent;
            text-transform: uppercase;
            padding: 0.5rem 1rem 0.5rem 1rem;
            &:hover {
                color: ${({ theme }) => theme.colors.violet};
            }
            &:active {
                transform: scale(0.95);
            }
            &:focus {
                color: ${({ theme }) => theme.colors.violet};
                border-left: 0.2rem solid ${({ theme }) => theme.colors.violet};
            }
        }
    }
`
