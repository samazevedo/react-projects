import styled from 'styled-components'

export const SliderStyled = styled.main`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;

    & > header {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        width: 100%;
        margin: 3rem 0;
        & svg {
            color: ${({ theme }) => theme.colors.red};
            font-size: ${({ theme }) => theme.fontSizes.xlarge};
            margin: 0;
            padding: 0;
            justify-self: end;
        }
        & h1 {
            margin: 0;
            padding: 0;
            justify-self: center;
            font-size: ${({ theme }) => theme.fontSizes.xxlarge};
        }
    }
    & .slider {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        width: 100%;
        & .slider-item {
            display: grid;
            grid-template-rows: 1fr 0.1fr 1fr;
            grid-template-columns: 1fr;
            align-items: flex-start;
            justify-items: center;
            width: 100%;
            & .icons {
                display: grid;
                grid-template-rows: 1fr;
                grid-template-columns: 1fr 1fr;
                align-items: stretch;
                justify-items: center;
                width: 100%;
                & svg {
                    color: ${({ theme }) => theme.colors.red};
                    font-size: ${({ theme }) => theme.fontSizes.xlarge};
                    cursor: pointer;

                    & :active {
                        transform: scale(0.9);
                    }
                }

                & .left {
                    justify-self: start;
                    position: absolute;
                    top: 50%;
                    left: 5%;
                }
                & .right {
                    justify-self: end;
                    position: absolute;
                    top: 50%;
                    right: 5%;
                }
            }
            & .slider-header {
                display: grid;
                grid-template-rows: 1.5fr 0.5fr;
                align-items: flex-start;
                justify-items: center;
            }
            & .image-container {
                width: 15rem;
                height: 15rem;
                overflow: hidden;
                border-radius: 50%;
            }
            & .slider-headings {
                display: grid;
                grid-template-rows: 1fr 1fr;
                justify-items: center;
                align-items: center;
                padding: 0;
                margin: 0;
                & h2 {
                    margin: 0;
                    padding: 0;
                }
                & p {
                    margin: 0;
                    padding: 0;
                }
            }
            & .quote {
                display: grid;
                grid-template-rows: 1fr 1fr;
                justify-items: center;
                align-items: flex-start;
                padding: 0;
                margin: 0;
                & svg {
                    color: ${({ theme }) => theme.colors.red};
                    font-size: ${({ theme }) => theme.fontSizes.xlarge};
                }
            }
        }
    }
`
