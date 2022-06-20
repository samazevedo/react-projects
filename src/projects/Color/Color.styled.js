import styled from 'styled-components'

export const ColorStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
    justify-items: center;
    & input.error {
        border: 2px solid red;
    }
    & .random-palette {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        width: 100%;
        max-width: 300px;
        height: 100%;
        align-items: center;
        justify-items: center;
        & h3 {
            text-align: center;
            margin: 0;
            padding: 0;
        }
        & ul {
            margin: 0;
            padding: 0;
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            grid-gap: 10px;
            justify-items: center;
            align-items: center;
            & li {
                width: 30px;
                height: 30px;
                & article {
                    border-radius: 50%;
                }
            }
        }

        & button {
            border: none;
            border-radius: 3px;
            padding: 5px 10px;
            background-color: #000;
            color: #fff;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:active {
                transform: scale(0.98);
            }
        }
    }
`
export const SingleColorStyled = styled.article`
    display: grid;
    width: 100%;
    height: 100%;
    background-color: ${({ color }) => color};
`
