import styled from 'styled-components'

export const ReminderStyled = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin-bottom: 3rem;
    background-color: ${({ theme }) => theme.colors.red};

    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 0 0 3px rgba(0, 0, 0, 0.5);
`
export const ReminderSection = styled.section`
    display: grid;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    width: 20rem;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px rgba(100, 100, 100, 1), 0 0 3px rgba(100, 100, 100, 1);
    & h3 {
        font-size: 0.8rem;
        margin-left: 1rem;
    }
    & button {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: 0.1rem;
        padding: 0.5rem;
        margin: 0.2rem 0.5rem 0.2rem 0.5rem;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        &:focus {
            outline: none;
        }
        &:active {
            transform: scale(0.99);
        }
    }
`
