import { CartStyled } from './Cart.styled'
import { Navbar } from './Navbar'
import { Bag } from './Bag'

const Cart = () => {
    return (
        <CartStyled>
            <Navbar />
            <h1>Your Bag</h1>
            <Bag />
        </CartStyled>
    )
}

export default Cart
