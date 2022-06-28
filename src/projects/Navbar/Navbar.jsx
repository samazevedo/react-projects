import { FaBars } from 'react-icons/fa'
import { NavbarStyled } from './Navbar.styled'
import { links, social } from './navbarData'

function Navbar() {
    return (
        <NavbarStyled>
            <div className='header'>
                <div className='logo'>
                    <span>Coding</span>
                </div>
                <button className='toggle'>
                    <FaBars className='icon' />
                </button>
            </div>
            <div className='links-container'>
                <ul className='links'>
                    <li>
                        <a href='/'>home</a>
                    </li>
                    <li>
                        <a href='/'>about</a>
                    </li>
                    <li>
                        <a href='/'>contact</a>
                    </li>
                    <li>
                        <a href='/'>products</a>
                    </li>
                </ul>
            </div>
            <div className='social-icons'>
                <ul>
                    <li>
                        <a href={social.facebook}>a</a>
                    </li>
                    <li>
                        <a href={social.facebook}>b</a>
                    </li>
                    <li>
                        <a href={social.facebook}>c</a>
                    </li>
                    <li>
                        <a href={social.facebook}>d</a>
                    </li>
                </ul>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
