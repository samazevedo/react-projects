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
    }
    & .project-item {
        display: grid;
        grid-template-rows: 1fr auto;
        justify-items: center;
        box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
        border-radius: 0.2rem;
        padding: 1rem;
        height: 15rem;
        &:hover {
            transform: translate(-0.1rem, -0.1rem);
            box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
            transition: all 0.4s ease-in-out;
        }
        & button {
            font-size: ${({ theme }) => theme.fontSizes.xsmall};
            padding: 0.3rem;
            border: none;
            background: ${({ theme }) => theme.colors.gray};
            color: ${({ theme }) => theme.colors.white};
            border-radius: 0.2rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            &:hover {
                background: ${({ theme }) => theme.colors.orange};

                transition: all 0.4s ease-in-out;
            }
        }
    }
`
export const BgImage = styled.div`
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
`
