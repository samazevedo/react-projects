import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${({ theme }) => theme.colors.green};
    padding: 0.7rem;
`
export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`
export const HeaderNav = styled.nav`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
