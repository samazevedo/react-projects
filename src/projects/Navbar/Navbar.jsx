import { FaBars } from 'react-icons/fa'
import { NavbarStyled } from './Navbar.styled'
import { links, social } from './navbarData'
import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <NavbarStyled>
            <div className='header'>
                <div className='logo'>
                    <span>Coding</span>
                </div>
                <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
                    <FaBars className='icon' />
                </button>
            </div>
            <div
                className={`${
                    isOpen ? 'links-container open' : 'links-container'
                }`}
            >
                <ul className='links'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='social-icons'>
                <ul>
                    {social.map((item) => {
                        const { id, url, icon } = item
                        return (
                            <li key={id} className='social-item'>
                                <a href={url}>
                                    <i> {icon}</i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
