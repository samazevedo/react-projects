import styled from 'styled-components'

export const GroceryStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.blue};
        margin: 0;
        padding: 0;
    }
    & .container {
        display: grid;
        margin: 10% 0;
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.1fr 1fr 0.5fr;
        align-items: center;
        justify-items: center;
        width: 70vw;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        & form {
            display: grid;
            grid-template-columns: 1.5fr 0.5fr;
            align-self: center;
            margin: 0;
            padding: 0;
            width: 100%;
        }
        & input {
            font-size: ${({ theme }) => theme.fontSizes.small};
            border: 1px solid ${({ theme }) => theme.colors.blue};
            border-radius: 0.3rem;
            padding: 0.5rem;
            margin: 1%;
            &:focus {
                outline: none;
            }
        }
        & button {
            font-size: ${({ theme }) => theme.fontSizes.small};
            border-radius: 0.3rem;
            padding: 0.2srem;
            border: none;
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};
            margin: 2%;
            &:focus {
                outline: none;
            }
            &:hover {
                background-color: ${({ theme }) => theme.colors.black};
            }
            &:active {
                transform: perspective(1px) translateZ(0);
            }
        }
        & .clear-list {
            color: ${({ theme }) => theme.colors.red};
            background-color: transparent;
            cursor: pointer;
            &:hover {
                color: ${({ theme }) => theme.colors.yellow};
                background-color: transparent;
            }
        }
    }
`
export const GroceryList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: flex-start;
    & li {
        display: grid;
        grid-template-columns: 1.5fr 0.5fr 0.5fr;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSizes.small};
        & .icon {
            cursor: pointer;
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            margin: 10%;
            &.trash {
                color: ${({ theme }) => theme.colors.red};
                justify-self: flex-end;
            }
            &.edit {
                color: ${({ theme }) => theme.colors.green};
                justify-self: flex-start;
            }
        }
    }
`
export const AlertStyled = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
`
