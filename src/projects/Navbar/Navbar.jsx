import { FaBars } from 'react-icons/fa'
import { NavbarStyled } from './Navbar.styled'
import { links, social } from './navbarData'
import { useState, useRef, useEffect } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (isOpen) {
            linksContainerRef.current.style.height = `${linksHeight + 20}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [isOpen])

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
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
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
