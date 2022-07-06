import { FaShoppingBag } from 'react-icons/fa'
import { NavbarStyled } from './Cart.styled'

export const Navbar = () => {
    return (
        <NavbarStyled>
            <div className='logo'>useContext</div>
            <div className='check-out'>
                <FaShoppingBag />
                <span className='count'>1</span>
            </div>
        </NavbarStyled>
    )
}
