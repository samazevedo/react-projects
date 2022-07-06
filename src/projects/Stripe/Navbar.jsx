import { useGlobalContext } from './context'
import { NavbarStyled } from './Stripe.styled'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        console.log(tempBtn)
        const center = (tempBtn.left + tempBtn.right) / 2 - 65
        const bottom = tempBtn.bottom
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
                    <li>
                        <button
                            className='link-btn'
                            onMouseOver={displaySubmenu}
                        >
                            ONe
                        </button>
                    </li>
                    <li>
                        <button
                            className='link-btn'
                            onMouseOver={displaySubmenu}
                        >
                            two
                        </button>
                    </li>
                    <li>
                        <button
                            className='link-btn'
                            onMouseOver={displaySubmenu}
                        >
                            three
                        </button>
                    </li>
                </ul>
                <button className='sign-in-btn btn'>Sign in</button>
            </header>
        </NavbarStyled>
    )
}

export default Navbar
