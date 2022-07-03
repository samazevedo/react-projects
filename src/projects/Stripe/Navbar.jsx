import { useGlobalContext } from './context'
import { NavbarStyled } from './Stripe.styled'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

    return (
        <NavbarStyled>
            <header className='nav-header'>
                <div className='logo'>
                    <span>Stripe</span>
                </div>
                <button className='toggle-btn btn' onClick={openSidebar}>
                    <FaBars />
                </button>
                <ul className='links-list'>
                    <li>
                        <button className='link-btn'>ONe</button>
                    </li>
                    <li>
                        <button className='link-btn'>two</button>
                    </li>
                    <li>
                        <button className='link-btn'>three</button>
                    </li>
                </ul>
                <button className='sign-in-btn btn'>Sign in</button>
            </header>
        </NavbarStyled>
    )
}

export default Navbar
