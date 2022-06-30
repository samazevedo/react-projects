import styled from 'styled-components'

export const SidebarStyled = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.aguablue};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`
export const HomeStyled = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    & .show-modal-btn {
        border: none;
        background-color: ${({ theme }) => theme.colors.violet};
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        text-transform: uppercase;
        padding: 0.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
        width: fit-content;
        justify-self: center;
        transition: all 0.3s ease-in-out;
        &:active {
            transform: scale(0.8);
        }
        & :hover {
        }
        & :focus {
            outline: none;
        }
    }

    & .sidebar-toggle {
        position: absolute;
        top: 0;
        left: 0;
        background-color: transparent;
        border: none;
        outline: none;
        & .icon {
            margin: 1rem 0 0 1rem;
            font-size: ${({ theme }) => theme.fontSizes.xlarge};
            color: ${({ theme }) => theme.colors.black};
            background-color: transparent;
            cursor: pointer;
            animation: infinite scaleGrow 1s linear;
            @keyframes scaleGrow {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.3);
                }
                100% {
                    transform: scale(1);
                }
            }
        }
    }
`
export const ModalStyled = styled.div`
    visibility: hidden;
    & .show-modal {
        display: flex;
        visibility: visible;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    & .modal-container {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 0.2rem;
        padding: 1rem;
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        position: relative;
        & .close-modal {
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            color: ${({ theme }) => theme.colors.red};
            background-color: transparent;
            font-size: ${({ theme }) => theme.fontSizes.small};
            text-transform: uppercase;
            padding: 0.2rem;
            cursor: pointer;
            &:active {
                transform: scale(0.9);
            }
            & :focus {
                outline: none;
            }
        }
    }
`

export const AsideStyled = styled.aside`
    visibility: hidden;
    &.show-aside {
        visibility: visible;
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 1.8fr;
    & header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        & .logo {
            justify-self: center;
            color: ${({ theme }) => theme.colors.violet};
        }
        & .close-btn {
            justify-self: flex-end;
            color: ${({ theme }) => theme.colors.red};
            background-color: transparent;
            cursor: pointer;
            border: none;
            font-size: ${({ theme }) => theme.fontSizes.medium};
            height: 1rem;
            &:active {
                transform: scale(0.9);
            }
            & :focus {
                outline: none;
            }
        }
    }
    & .links-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100%;
    }
    & .links {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        align-items: center;
        & li,
        & a {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            width: 100%;
            height: 100%;
            color: ${({ theme }) => theme.colors.black};
            font-size: ${({ theme }) => theme.fontSizes.small};
            font-family: Arial, Helvetica, sans-serif;
            text-transform: capitalize;
            transition: all 0.3s ease-in-out;
            & :hover {
                color: ${({ theme }) => theme.colors.violet};
                background-color: ${({ theme }) => theme.colors.aguablue};
                transform: scale(0.99);
            }
        }
    }
    & .social-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100%;
        align-items: flex-end;
        justify-items: center;
        & .social {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: repeat(auto-fit, minmax(1rem, 0.5fr));
            width: 100%;
            font-size: ${({ theme }) => theme.fontSizes.medium};
            & a,
            & li {
                color: ${({ theme }) => theme.colors.violet};
                transition: all 0.5s ease-in-out;
                & :hover {
                    background-color: ${({ theme }) => theme.colors.violet};
                    color: ${({ theme }) => theme.colors.aguablue};
                    animation: grow 0.5s ease-in-out;
                    @keyframes grow {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.1);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                }
            }
        }
    }
`
