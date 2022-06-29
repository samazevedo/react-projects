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
