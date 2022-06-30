import { FaBars } from 'react-icons/fa'
import { HomeStyled } from './Sidebar.styled'
import { useGlobalContext } from './context'

function Home() {
    const { openModal, openSidebar } = useGlobalContext()

    return (
        <HomeStyled>
            <button className='sidebar-toggle' onClick={() => openSidebar()}>
                <FaBars className='icon' />
            </button>
            <button className='show-modal-btn' onClick={() => openModal()}>
                Show Modal
            </button>
        </HomeStyled>
    )
}

export default Home
