import { Link } from 'react-router-dom'
import { HeaderNav, HeaderStyled, HeaderTitle } from './Header.styles'
function Header() {
    return (
        <HeaderStyled>
            <HeaderTitle>React Projects</HeaderTitle>
            <HeaderNav>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
            </HeaderNav>
        </HeaderStyled>
    )
}

export default Header
