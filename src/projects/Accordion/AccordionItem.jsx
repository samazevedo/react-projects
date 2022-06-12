import { SingleQuestion } from './Accordion.styled'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState } from 'react'

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <SingleQuestion>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </button>
            </header>
            {isOpen && <p>{content}</p>}
        </SingleQuestion>
    )
}
export default AccordionItem
