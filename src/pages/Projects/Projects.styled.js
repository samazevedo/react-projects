import styled from 'styled-components'

export const ProjectsStyled = styled.section`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    margin-bottom: 5rem;
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        padding: 0;
        margin: 0;
    }
    & h2 {
        color: ${({ theme }) => theme.colors.pink};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
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
        margin-bottom: 2%;
    }
`
