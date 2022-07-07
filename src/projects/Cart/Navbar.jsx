import { FaShoppingBag } from 'react-icons/fa'
import { NavbarStyled } from './Cart.styled'
import { useGlobalContext } from './context'

export const Navbar = () => {
    const { amount } = useGlobalContext()
    return (
        <NavbarStyled>
            <div className='logo'>useReducer</div>
            <div className='check-out'>
                <FaShoppingBag />
                <span className='count'>{amount}</span>
            </div>
        </NavbarStyled>
    )
}
