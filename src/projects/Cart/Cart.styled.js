import styled from 'styled-components'

export const CartStyled = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    grid-template-columns: 1fr;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        text-transform: uppercase;
        text-align: center;
        margin-top: 1rem;
    }
`
export const NavbarStyled = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    padding: 0.4rem;
    & .logo {
        font-size: ${({ theme }) => theme.fontSizes.large};
        justify-self: center;
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
    }
    & .check-out {
        position: relative;
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.white};
        justify-self: end;
        margin-right: 7rem;
    }
    & .count {
        position: absolute;
        top: -5px;
        left: 25px;
        display: grid;
        justify-items: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.darkblue};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        border: none;
        border-radius: 2rem;
        width: 2rem;
        height: 2rem;
    }
`
export const BagStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0.1rem;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
    margin: 0 5rem;
    transition: all 0.3s ease-in-out;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        margin: 0 10rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        margin: 0 20rem;
    }
    & .horizontal-line {
        justify-self: center;
        width: 90%;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.red};
    }
    & .checkout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        padding: 0 1rem;
        & .price-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 0;
            padding: 0;
        }
        & .total {
            font-size: ${({ theme }) => theme.fontSizes.small};
            font-weight: bold;
            justify-self: self-start;
        }
        & .total-price {
            font-size: ${({ theme }) => theme.fontSizes.small};
            font-weight: bold;
            justify-self: self-end;
        }
        & button {
            align-self: flex-start;
            justify-self: center;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            background-color: transparent;
            color: ${({ theme }) => theme.colors.red};
            border: 1px solid ${({ theme }) => theme.colors.red};
            border-radius: 0.2rem;
            padding: 0.5rem;
            margin: 0.5rem;
            letter-spacing: 0.3rem;
            box-shadow: 0 0.1rem 0.1rem ${({ theme }) => theme.colors.red};
            &:hover {
                color: ${({ theme }) => theme.colors.red};
            }
            &:focus {
                outline: none;
            }
            &:active {
                transform: scale(0.98);
            }
        }
    }
    & .empy-list {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        margin: 0 auto;
        padding: 5rem 1rem;
        color: ${({ theme }) => theme.colors.gray};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        font-weight: 100;
    }
`
export const BagItemStyled = styled.article`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    & .image {
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        overflow: hidden;
        border: none;
        img {
            width: 100%;
            max-width: 4rem;
            height: 4rem;
            object-fit: fill;
        }
    }
    & .info {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
        justify-items: flex-start;
        margin-left: 0;
        & h3 {
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            font-weight: 300;
        }
        & p {
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            font-weight: 100;
            color: ${({ theme }) => theme.colors.gray};
        }
        & button {
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            font-weight: 300;
            background-color: transparent;
            color: ${({ theme }) => theme.colors.blue};
            border: none;
            padding: 0;
            margin: 0.4rem 0 0rem 0rem;
            cursor: pointer;
            &:hover {
                color: ${({ theme }) => theme.colors.red};
            }
        }
    }
    & .actions {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        padding-right: 1rem;
        align-items: center;
        justify-items: flex-end;
        & button {
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.colors.darkblue};
            font-size: ${({ theme }) => theme.fontSizes.medium};
            font-weight: 900;
            padding-right: 0.35rem;
            margin: 0;
            cursor: pointer;
            &:hover {
                color: ${({ theme }) => theme.colors.blue};
            }
        }
    }
    & input {
        width: 2rem;
        text-align: center;
    }
`
