import { StripeStyled } from './Stripe.styled'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Submenu from './Submenu'
import { AppProvider } from './context'
function Stripe() {
    return (
        <AppProvider>
            <StripeStyled>
                <Navbar />
                <Hero />
                <Sidebar />
                <Submenu />
            </StripeStyled>
        </AppProvider>
    )
}

export default Stripe
