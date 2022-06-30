import { FaTimes } from 'react-icons/fa'
import { AsideStyled } from './Sidebar.styled'
import { links, social } from './sidebarDATA'
import { useGlobalContext } from './context'

function SidebarComp() {
    const { closeSidebar, sidebarOpen } = useGlobalContext()
    return (
        <AsideStyled className={`${sidebarOpen ? 'show-aside' : null}`}>
            <header>
                <div className='logo'>
                    <span>S Coders</span>
                </div>
                <button className='close-btn' onClick={() => closeSidebar()}>
                    <FaTimes />
                </button>
            </header>
            <div className='links-container'>
                <ul className='links'>
                    {links.map((link) => {
                        const { id, url, text, icon } = link
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon} {text}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='social-container'>
                <ul className='social'>
                    {social.map((link) => {
                        const { id, url, icon } = link
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </AsideStyled>
    )
}

export default SidebarComp
