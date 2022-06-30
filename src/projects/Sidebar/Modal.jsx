import { FaTimes } from 'react-icons/fa'
import { ModalStyled } from './Sidebar.styled'
import { useGlobalContext } from './context'

function Modal() {
    const { modalOpen, closeModal } = useGlobalContext()

    return (
        <ModalStyled>
            <div
                className={`${
                    modalOpen ? 'show-modal modal-overlay' : 'modal-overlay'
                }`}
            >
                <div className='modal-container'>
                    <h3>modal content</h3>
                    <button
                        className='close-modal'
                        onClick={() => closeModal()}
                    >
                        {' '}
                        <FaTimes />
                    </button>
                </div>
            </div>
        </ModalStyled>
    )
}

export default Modal
