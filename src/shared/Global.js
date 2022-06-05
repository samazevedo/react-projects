import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


html {
    scroll-behavior: smooth;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
body {
    //font-family: 'Bangers', cursive;
    //font-family: 'Rajdhani', sans-serif;
    //font-family: 'Teko', sans-serif;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.primaryBG};
}
img {
    max-width: 100%;
}
ul {
    list-style: none;
}
a{
    text-decoration: none;
}

`
