import { FaTimes } from 'react-icons/fa'
import { ModalStyled } from './Sidebar.styled'

function Modal() {
    return (
        <ModalStyled>
            <div className='modal-overlay'>
                <div className='modal-container'>
                    <h3>modal content</h3>
                    <button className='close-modal'>
                        {' '}
                        <FaTimes />
                    </button>
                </div>
            </div>
        </ModalStyled>
    )
}

export default Modal
