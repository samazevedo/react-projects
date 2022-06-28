import styled from 'styled-components'

export const NavbarStyled = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: aliceblue;
    display: grid;
    grid-template-rows: 1fr 1fr;
    z-index: 10;
    & .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`
