import { FaBars } from 'react-icons/fa'
import { HomeStyled } from './Sidebar.styled'
import { AppContext } from './context'
import { useContext } from 'react'

function Home() {
    const data = useContext(AppContext)
    console.log(data)

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
