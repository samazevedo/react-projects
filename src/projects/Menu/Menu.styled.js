import styled from 'styled-components'

export const MenuStyled = styled.main`
    display: grid;
    grid-template-rows: auto 1fr;
    align-items: center;
    justify-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    & header {
        display: grid;
        grid-template-rows: 1.5fr 0.5fr;
        & .underline {
            width: 100%;
            height: 0.3rem;
            background-color: ${({ theme }) => theme.colors.darkyellow};
        }
    }
    & .menu-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        width: 100%;
    }
`
export const MenuItemStyled = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: flex-start;
    margin: 0 2rem 3rem 2rem;
    width: 100%;
    max-width: 40rem;
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
        }
        & p {
            font-size: ${({ theme }) => theme.fontSizes.small};
            color: ${({ theme }) => theme.colors.lightgray};
            margin: 0;
            padding: 0;
        }
    }
`
