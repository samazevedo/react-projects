import questions from './data'
import { AccordionStyled } from './Accordion.styled'
import AccordionItem from './AccordionItem'

function Accordion() {
    return (
        <AccordionStyled>
            <header>
                <h3>Questins and answers about internet and the Web</h3>
            </header>
            <section className='info'>
                {questions.map((question) => {
                    return <AccordionItem key={question.id} {...question} />
                })}
            </section>
        </AccordionStyled>
    )
}

export default Accordion
