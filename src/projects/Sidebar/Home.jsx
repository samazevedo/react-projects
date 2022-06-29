import { FaBars } from 'react-icons/fa'
import { HomeStyled } from './Sidebar.styled'

function Home() {
    return (
        <HomeStyled>
            <button className='sidebar-toggle'>
                <FaBars className='icon' />
            </button>
            <button className='show-modal-btn'>Show Modal</button>
        </HomeStyled>
    )
}

export default Home
