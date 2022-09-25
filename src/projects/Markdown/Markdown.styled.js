import styled from 'styled-components'

export const MarkdownStyled = styled.main`
    width: 100%;
    height: 100%;
    & .markdown {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        width: 100%;
        height: 100%;
        & textarea {
            height: 50vh;
            border: none;
            box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
            padding: 1rem;
        }
        & .result {
        }
    }
`
