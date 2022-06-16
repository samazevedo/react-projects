import styled from 'styled-components'

export const LoremStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto 0;
    padding: 3%;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;
    font-family: 'Arial';
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        font-weight: 500;
        color: ${({ theme }) => theme.colors.purple};
        margin-top: 3rem;
    }
    & label {
        font-size: ${({ theme }) => theme.fontSizes.small};
        padding-right: 0.5rem;
    }
    & input {
        font-size: ${({ theme }) => theme.fontSizes.small};
        color: ${({ theme }) => theme.colors.purple};
    }
    & button {
        border: none;
        border-radius: 0.2rem;
        box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.7);
        font-size: ${({ theme }) => theme.fontSizes.small};
        background-color: ${({ theme }) => theme.colors.purple};
        color: #fff;
        margin-left: 0.3rem;
        padding: 0.2rem;
        transition: all 0.5 ease-in;
        cursor: pointer;

        &:active {
            transform: scale(0.98);
        }
    }
`
