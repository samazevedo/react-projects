import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*,
*::before,
*::after {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
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
