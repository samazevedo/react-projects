import styled from 'styled-components'

export const ReviewBox = styled.article`
    display: grid;
    grid-template-rows: 0.5fr 1.5fr;
    align-items: flex-start;
    width: 100%;
    max-width: 30rem;
    margin-bottom: 10rem;
    height: 100%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    margin: 0;
    padding: 0.3rem;
    font-family: sans-serif;
    & .info {
        padding: 0;
        margin: 0;
        & h1 {
            font-size: ${({ theme }) => theme.fontSizes.small};
            padding: 1rem 0;
            margin: 0;
        }
        & h2 {
            font-size: ${({ theme }) => theme.fontSizes.medium};
            color: ${({ theme }) => theme.colors.green};
            font-weight: 300;
            text-transform: uppercase;
            margin: 0;
            text-align: center;
            padding: 0;
        }
        & p {
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            font-weight: 500;
            color: ${({ theme }) => theme.colors.lightgray};
            margin: 0;
            padding: 0;
            text-align: center;
        }
    }
    & .img-container {
        position: relative;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border-right: 0.5rem solid ${(props) => props.theme.colors.green};
        margin: 0 auto;
        background-image: url(${({ image }) => image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 0;
        & .quote-icon {
            position: absolute;
            font-size: 1rem;
            top: 0.5rem;
            left: -0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({ theme }) => theme.colors.black};
            background-color: ${({ theme }) => theme.colors.green};
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
        }
    }
    & .btn {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        color: ${({ theme }) => theme.colors.green};
        background-color: transparent;
        cursor: pointer;
        border: 0;
        border-radius: 0.2rem;
        & :hover {
            color: ${({ theme }) => theme.colors.yellow};
            transition: all 0.5s ease-in-out;
        }
        & :active {
            transform: scale(0.8);
        }
        & :focus {
            outline: none;
        }
    }
    & .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        align-items: center;
        justify-items: center;
    }
    & .random-btn {
        background-color: ${({ theme }) => theme.colors.lightgreen};
        color: ${({ theme }) => theme.colors.darkgreen};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        padding: 0.5rem;
        width: 30%;
        align-self: center;
        justify-self: center;
        border: none;
        border-radius: 0.2rem;
        &:hover {
            color: ${({ theme }) => theme.colors.green};
            cursor: pointer;
            transition: all 0.5s ease-in-out;
        }
        &:active {
            transform: scale(0.98);
        }
        & :focus {
            outline: none;
        }
    }
`
