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
                    <FaBars />
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
                        <a href={social.facebook}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href={social.facebook}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href={social.facebook}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href={social.facebook}>
                            <FaFacebookF />
                        </a>
                    </li>
                </ul>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
