import styled from 'styled-components'

export const StripeStyled = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: white;
    display: grid;
`
export const NavbarStyled = styled.nav`
    display: grid;
    & .nav-center {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        & .nav-header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            & .logo {
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: ${({ theme }) => theme.fontSizes.large};
                font-weight: bold;
                color: white;
                text-shadow: 0.1rem 0.1rem 0.2rem
                    ${({ theme }) => theme.colors.gray};
                align-self: center;
            }
            & .toggle-btn {
                display: grid;
                align-items: center;
                justify-items: center;
                border: none;
                border-radius: 0.3rem;
                background-color: #000;
                color: white;
                font-size: ${({ theme }) => theme.fontSizes.small};
                width: 3rem;
                padding: 0.5rem;
                cursor: pointer;
                &:hover {
                    background-color: ${({ theme }) => theme.colors.gray};
                }
                &:focus {
                    outline: none;
                }
                &:active {
                    transform: scale(0.95);
                }
            }
        }
        & .link-btn {
            border: none;
            background-color: transparent;
        }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        & .toggle-btn {
            display: none;
        }
    }
`
