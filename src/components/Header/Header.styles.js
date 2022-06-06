import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    & a {
        color: ${({ theme }) => theme.colors.black};
    }
    & a:hover {
        color: ${({ theme }) => theme.colors.orange};
    }
`
export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 0;
    padding-left: 3%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    &:hover {
        color: ${({ theme }) => theme.colors.orange};
    }
`
export const HeaderNav = styled.nav`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
