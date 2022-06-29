import { ModalStyled } from './Sidebar.styled'

function Modal() {
    return (
        <ModalStyled>
            <div className='modal-overlay show-modal'>
                <div className='modal-container'>
                    <h3>modal content</h3>
                </div>
            </div>
        </ModalStyled>
    )
}

export default Modal
