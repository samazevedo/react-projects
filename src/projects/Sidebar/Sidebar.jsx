import { SidebarStyled } from './Sidebar.styled'
import Modal from './Modal'
import Home from './Home'
import SidebarComp from './SidebarComp'
import { AppProvider } from './context'

function Sidebar() {
    return (
        <AppProvider>
            <SidebarStyled>
                <Modal />
                <Home />
                <SidebarComp />
            </SidebarStyled>
        </AppProvider>
    )
}

export default Sidebar
