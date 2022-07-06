import { useGlobalContext } from './context'
import { HeroStyled } from './Stripe.styled'

function Hero() {
    const { closeSubmenu } = useGlobalContext()

    return (
        <HeroStyled onMouseOver={closeSubmenu}>
            <div className='hero-bg'></div>
            <div className='hero-content'>
                <article>
                    <h1>Payments infrastructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes from startups to
                        Fortune 500s, use Stripe's software and API's to accept
                        payments, send payouts, and manage their businesses
                        online.
                    </p>
                    <button className='btn'>Start Now</button>
                </article>
                <div className='image-hero'>
                    <img src='/assets/images/phone.svg' alt='phone' />
                </div>
            </div>
        </HeroStyled>
    )
}

export default Hero
