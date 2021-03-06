import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.gray};
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    z-index: 1;
    a {
        color: ${(props) => props.theme.colors.yellow};
    }
    & .links-container {
        display: grid;
        width: 100%;
        height: 0;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        overflow: hidden;
        transition: all 1s ease-in-out;
        height: 0px;
    }

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
            height: auto !important;
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
                width: 100%;
                justify-items: end;
                & li:last-child {
                    margin-right: 1rem;
                }
                & .social-item {
                    color: ${({ theme }) => theme.colors.yellow};
                    cursor: pointer;
                }
            }
        }
    }
`
