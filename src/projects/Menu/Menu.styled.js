import styled from 'styled-components'

export const MenuStyled = styled.main`
    display: grid;
    grid-template-rows: 0.3fr 0.2fr 2.5fr;
    align-items: center;
    justify-items: center;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    & header {
        display: grid;
        grid-template-rows: 1.7fr 0.3fr;
        & .underline {
            width: 100%;
            height: 0.3rem;
            background-color: ${({ theme }) => theme.colors.darkyellow};
        }
    }
    & .categories-menu {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-items: center;
        & div {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: repeat(auto-fit, minmax(0.5rem, 1fr));
            width: 100%;
            height: 100%;
            align-items: center;
            justify-items: center;
            margin: 2.5rem;
        }
    }
    & .menu-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        width: 100%;
    }
`
export const MenuButtons = styled.button`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    align-items: center;
    justify-items: center;
    color: ${({ theme }) => theme.colors.darkyellow};
    font-size: ${({ theme }) => theme.fontSizes.small};
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    padding: 0.4rem;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.darkyellow};
        border-radius: 0.2rem;

        transition: all 0.3s ease-in-out;
    }
`
export const MenuItemStyled = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    width: 100%;
    height: 100%;
    align-items: center;
    width: 100%;
    & .img-container {
        width: 13rem;
        height: 10rem;
        border-radius: 0.15rem;
        border: 0.3rem solid ${({ theme }) => theme.colors.darkyellow};
        padding: 0;
        margin-top: 0;
    }
    & .info {
        display: grid;
        grid-template-rows: 0.5fr 1.5fr;
        header {
            display: grid;
            grid-template-columns: 1.5fr 0.5fr;
            & h3 {
                font-size: ${({ theme }) => theme.fontSizes.small};
                margin: 0;
                padding: 0;
            }
            & p {
                font-size: ${({ theme }) => theme.fontSizes.small};
                color: ${({ theme }) => theme.colors.darkyellow};
                margin: 0;
                padding: 0;
            }
            & .title-underscore {
                width: 80%;
                height: 0.1rem;
                background-color: ${({ theme }) => theme.colors.yellow};
            }
        }
        & p {
            font-size: ${({ theme }) => theme.fontSizes.small};
            color: ${({ theme }) => theme.colors.lightgray};
            margin: 0;
            padding: 0;
        }
    }
    & .item-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 2rem;
    }
`
