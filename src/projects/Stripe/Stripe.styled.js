import styled from 'styled-components'

export const StripeStyled = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    font-family: 'Roboto', sans-serif;
    & .btn {
        border: none;
        border-radius: 0.3rem;
        background-color: #000;
        color: #fff;
        padding: 0.3rem;
        font-size: 1rem;
        cursor: pointer;
        width: fit-content;

        &:hover {
            background-color: #545454;
            color: #fff;
        }
        &:focus {
            outline: none;
        }
        &:active {
            transform: scale(0.99);
        }
    }
`

export const NavbarStyled = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-items: center;
    & .nav-header {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        width: 100%;
    }
    & .logo {
        justify-self: center;
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: #fff;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5);
    }
    & .links-list {
        display: none;
    }
    & .sign-in-btn {
        display: none;
    }
    & .toggle-btn {
        justify-self: end;
        margin-right: 1rem;
        padding: 0.3rem 0.5rem;
    }
    & .link-btn {
        background-color: transparent;
        border: none;
        color: blue;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        & .nav-header {
            grid-template-columns: repeat(3, 1fr);
            & .links-list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                align-items: center;
                justify-items: center;
            }
            & .sign-in-btn {
                display: grid;
                justify-self: end;
                margin-right: 1rem;
                align-items: center;
                justify-items: center;
            }
            & .toggle-btn {
                display: none;
            }
        }
    }
`
export const HeroStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
    & .hero-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: #85fffd;
        background-image: linear-gradient(
            45deg,
            #85fffd 0%,
            #dff5a5 50%,
            #8f54c6 100%
        );
        overflow: visible;
        clip-path: polygon(0 1%, 100% 1%, 100% 30%, 0 55%);
    }
    & .hero-content {
        z-index: 2;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        & article {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.5fr 0.5fr;
            justify-items: center;
            margin-left: 1rem;
        }
        & h1 {
            font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
            color: #fff;
            text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.5);
        }
        & p {
            font-size: ${({ theme }) => theme.fontSizes.small};
            color: gray;
            padding: 0;
        }
        & button {
            height: fit-content;
        }
        & .image-hero {
            padding: 1rem;
            margin: 1rem;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        & .image-hero {
            display: none;
        }
        & .hero-content {
            grid-template-columns: 1fr;
        }
    }
`
