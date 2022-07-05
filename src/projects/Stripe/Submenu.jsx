import { useGlobalContext } from './context'
import { SubmenuStyled } from './Stripe.styled'
import { useEffect, useRef } from 'react'

const Submenu = () => {
    const { isSubmenuOpen, location } = useGlobalContext()
    const container = useRef(null)
    useEffect(() => {
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    }, [location])

    return (
        <SubmenuStyled
            className={`${isSubmenuOpen ? ' submenu show ' : 'submenu'}`}
            ref={container}
        >
            Submenu
        </SubmenuStyled>
    )
}

export default Submenu
