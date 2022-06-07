import styled from 'styled-components'

export const FooterStyled = styled.footer`
    position: fixed;
    width: 100%;
    bottom: 0;

    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
`
