import { FaTimes } from 'react-icons/fa'
import sublinks from './stripeDATA'
import { useGlobalContext } from './context'
import { SidebarStyled } from './Stripe.styled'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()

    return (
        <SidebarStyled className={`${isSidebarOpen ? 'show ' : ''}`}>
            <div className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                        const { links, page } = item
                        return (
                            <article key={index}>
                                <h3>{page}</h3>
                                <ul>
                                    {links.map((link, index) => {
                                        const { label, icon, url } = link
                                        return (
                                            <li key={index}>
                                                <a href={url}>
                                                    <span>{label}</span>
                                                    <span>{icon}</span>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </article>
                        )
                    })}
                </div>
            </div>
        </SidebarStyled>
    )
}

export default Sidebar
