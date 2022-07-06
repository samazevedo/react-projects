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
    &.submenu {
        position: absolute;
        margin: 0;
        padding: 0;
    }
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
    z-index: 4;
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
        padding: 0.3rem 0.5rem;
        border: none;
        color: #fff;
        font-size: 1rem;
        text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.7);
        font-size: ${({ theme }) => theme.fontSizes.medium};
        cursor: pointer;
        text-transform: capitalize;
        &:hover {
            transition: all 0.3s ease-in-out;
            color: ${({ theme }) => theme.colors.lightyellow};
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
export const HeroStyled = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
    margin: 0;
    & .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: #85fffd;
        background-image: linear-gradient(
            45deg,
            #85fffd 0%,
            #dff5a5 50%,
            #8f54c6 100%
        );
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
export const SidebarStyled = styled.aside`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    animation: shrink 0.5s ease-in-out;
    animation-fill-mode: forwards;
    @keyframes shrink {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    &.show {
        display: grid;
        visibility: visible;
        animation: grow 0.5s ease-in;
        animation-fill-mode: forwards;
        @keyframes grow {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
    }
    &.close {
        animation: shrink 0.5s ease-in-out;
        animation-fill-mode: forwards;
        @keyframes shrink {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
    }
    & .sidebar {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.1fr 1.9fr;
        align-items: flex-start;
        background-color: #fff;
        padding: 0.5rem;
        margin: 1.5rem;
        border-radius: 0.3rem;

        & .close-btn {
            justify-self: end;
            font-size: ${({ theme }) => theme.fontSizes.xlarge};
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        & h3 {
            font-size: ${({ theme }) => theme.fontSizes.medium};
            color: #fff;
            text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.9);
        }
        & ul {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(fit-content, 1fr);
            align-items: center;
            justify-items: flex-start;
            & a {
                display: grid;
                grid-template-columns: 0.5fr 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                justify-items: flex-start;
                color: #000;
                text-transform: capitalize;
                font-weight: 900;
                &:hover {
                    transition: all 0.3s ease-in-out;
                    color: #eaff4b;
                }
                & svg {
                    color: #eaff4b;
                    background-color: #000;
                    border-radius: 50%;
                    width: 2rem;
                    height: 2rem;
                    padding: 0.3rem;
                    margin-right: 1rem;
                }
            }
        }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        &.show {
            display: none;
        }
    }
`
export const SubmenuStyled = styled.aside`
    z-index: 5;
    display: none;
    position: absolute;
    background-color: transparent;
    border-radius: 0.3rem;
    border: none;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3), 0 0 0.5rem rgba(0, 0, 0, 0.3);
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.4rem;
    &.show {
        display: grid;
        margin: 0;
    }
    & .submenu-center {
        display: grid;
        align-items: center;
        justify-items: flex-start;
        & a {
            display: grid;
            grid-template-columns: 0.5fr 1.5fr;
            align-items: center;
            margin-right: 1rem;
            color: #000;
            text-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.3);
            font-size: ${({ theme }) => theme.fontSizes.small};
            text-transform: capitalize;
            & svg {
                color: #eaff4b;
            }
        }
        & ul {
            display: grid;
            align-items: center;
            justify-items: flex-start;
            &.col-2 {
                grid-template-columns: 1fr 1fr;
            }
            &.col-3 {
                grid-template-columns: 1fr 1fr 1fr;
            }
            &.col-4 {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
            & li {
                display: grid;
                grid-template-columns: 1fr;
                align-items: center;
                justify-items: center;
            }
        }
    }
    & h3 {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        text-transform: capitalize;
        color: #eaff4b;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.7);
        margin: 0;
    }
`
