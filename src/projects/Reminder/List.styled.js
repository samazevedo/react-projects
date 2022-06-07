import styled from 'styled-components'

export const ListItem = styled.article`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 1.5rem;

    & .picture {
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;
        overflow: hidden;
    }
    & .info {
        display: grid;
        justify-content: left;
        grid-template-rows: 1fr 0.5fr;

        & h4 {
            font-size: 1rem;
            font-weight: 900;
            margin: 0;
            padding: 0;
        }
        & p {
            font-size: 1rem;
            margin: 0;
            padding: 0;
            color: ${({ theme }) => theme.colors.gray};
        }
    }
`
