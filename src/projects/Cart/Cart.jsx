import { CartStyled } from './Cart.styled'
import { Navbar } from './Navbar'
import { Bag } from './Bag'
import { AppProvider } from './context'

const Cart = () => {
    // const {loading } = useGlobalContext()
    // if (loading) {
    //     return <div>Loading...</div>
    // }
    return (
        <AppProvider>
            <CartStyled>
                <Navbar />
                <h1>Your Bag</h1>
                <Bag />
            </CartStyled>
        </AppProvider>
    )
}

export default Cart
