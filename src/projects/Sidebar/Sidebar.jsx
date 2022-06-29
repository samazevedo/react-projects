import { SidebarStyled } from './Sidebar.styled'
import Modal from './Modal'
import Home from './Home'
import SidebarComp from './SidebarComp'

function Sidebar() {
    return (
        <SidebarStyled>
            <Modal />
            <Home />
            <SidebarComp />
        </SidebarStyled>
    )
}

export default Sidebar
