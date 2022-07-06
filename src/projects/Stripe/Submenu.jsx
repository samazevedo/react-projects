import { useGlobalContext } from './context'
import { SubmenuStyled } from './Stripe.styled'
import { useEffect, useRef, useState } from 'react'

const Submenu = () => {
    const [columns, setColumns] = useState('col-2')
    const {
        isSubmenuOpen,
        location,
        selectPage: { page, links },
    } = useGlobalContext()
    const container = useRef(null)
    useEffect(() => {
        setColumns('col-2')
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if (links.length === 3) {
            setColumns('col-3')
        }
        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [location, links])

    return (
        <SubmenuStyled
            className={`${isSubmenuOpen ? ' submenu show ' : 'submenu'}`}
            ref={container}
        >
            <h3>{page}</h3>
            <div className={`submenu-center`}>
                <ul className={`${columns}`}>
                    {links.map((link, index) => {
                        const { label, icon, url } = link
                        return (
                            <li key={index}>
                                <a href={url}>
                                    {icon}
                                    {label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </SubmenuStyled>
    )
}

export default Submenu
