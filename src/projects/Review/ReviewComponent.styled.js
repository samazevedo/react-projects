import styled from 'styled-components'

export const ReviewBox = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    margin-bottom: 10rem;
    height: 100%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    & .img-container {
        position: relative;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border-right: 0.5rem solid ${(props) => props.theme.colors.green};
        margin: 0 auto;
        overflow: hidden;

        & img {
            width: 100%;
        }
        & .quote-icon {
            position: absolute;
            font-size: 0.6rem;
            color: ${({ theme }) => theme.colors.green};
            background-color: ${({ theme }) => theme.colors.black};
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            z-index: 10;
        }
    }
`
