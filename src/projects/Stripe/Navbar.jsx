import { useGlobalContext } from './context'
import { NavbarStyled } from './Stripe.styled'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

    return (
        <NavbarStyled>
            <div className='nav-center'>
                <div className='nav-header'>
                    <div className='logo'>
                        <span>Stripe</span>
                    </div>
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul>
                    <li>
                        <button className='link-btn'>ONe</button>
                        <button className='link-btn'>two</button>
                        <button className='link-btn'>three</button>
                    </li>
                </ul>
            </div>
        </NavbarStyled>
    )
}

export default Navbar
