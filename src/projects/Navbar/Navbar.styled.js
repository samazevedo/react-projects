import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.gray};
    display: grid;
    grid-template-rows: 1fr 1fr;
    z-index: 10;
    & .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        margin-top: 1rem;
        & .logo {
            margin-left: 1rem;
            font-size: 1.5rem;
            & span {
                color: ${({ theme }) => theme.colors.turquise};
            }
        }
        & .toggle {
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: ${({ theme }) => theme.colors.yellow};
            font-size: ${({ theme }) => theme.fontSizes.medium};
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-items: flex-end;
            & .icon {
                font-size: 1.5rem;
            }
        }
        & .links-container {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            & .links {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                width: 100%;
            }
        }
    }
    & .social-icons {
        display: none;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr 1fr;
        & .header {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            & .icon {
                display: none;
            }
        }
        & .links-container {
            margin-top: 1rem;
            display: grid;
            grid-template-rows: 1fr;
        }
        & .links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            width: 100%;
        }
        & .social-icons {
            display: grid;
            margin-top: 1rem;

            & ul {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            }
        }
    }
`
