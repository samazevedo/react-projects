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
