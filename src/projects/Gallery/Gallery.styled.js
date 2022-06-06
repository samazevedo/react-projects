import styled from 'styled-components'

export const GalleryStyled = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    & h1 {
        color: ${({ theme }) => theme.colors.orange};
    }
    & h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.xxlarge};
        letter-spacing: 0.3rem;
        color: ${({ theme }) => theme.colors.gray};
    }
    & p {
        text-align: center;
    }
`
