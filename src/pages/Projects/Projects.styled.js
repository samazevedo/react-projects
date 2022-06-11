import styled from 'styled-components'

export const ProjectsStyled = styled.section`
    width: 100%;
    height: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    margin-bottom: 5rem;
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        padding: 0;
        margin: 0;
    }
    & h2 {
        color: ${({ theme }) => theme.colors.pink};
        font-size: ${({ theme }) => theme.fontSizes.medium};
        padding: 0;
        margin: 0;
    }
    & p {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
        padding: 0;
        margin: 0;
    }
    & a {
        font-size: ${({ theme }) => theme.fontSizes.xxsmall};
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.colors.blue};
        cursor: pointer;
    }
    & .project-item {
        display: grid;
        grid-template-rows: 1fr auto;
        justify-items: center;
        box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
        border-radius: 0.2rem;
        background-color: ${({ theme }) => theme.colors.white};
        padding: 1rem;
        cursor: pointer;
        height: 15rem;
    }
`
