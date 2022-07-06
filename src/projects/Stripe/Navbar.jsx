import { useGlobalContext } from './context'
import { NavbarStyled } from './Stripe.styled'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = Math.round(tempBtn.left + tempBtn.right) / 2 - 200
        const bottom = Math.round(tempBtn.bottom) - 3

        openSubmenu(page, { center, bottom })
    }

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
                    <li
                        onMouseOver={(e) => displaySubmenu(e)}
                        onMouseLeave={(e) => closeSubmenu(e)}
                    >
                        <button className='link-btn'>products</button>
                    </li>
                    <li
                        onMouseOver={(e) => displaySubmenu(e)}
                        onMouseLeave={(e) => closeSubmenu(e)}
                    >
                        <button className='link-btn'>developers</button>
                    </li>
                    <li
                        onMouseOver={(e) => displaySubmenu(e)}
                        onMouseLeave={(e) => closeSubmenu(e)}
                    >
                        <button className='link-btn'>company</button>
                    </li>
                </ul>
                <button className='sign-in-btn btn'>Sign in</button>
            </header>
        </NavbarStyled>
    )
}

export default Navbar
