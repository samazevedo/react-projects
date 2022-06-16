import { LoremStyled } from './Lorem.styled'
import LOREMDATA from './data'
import { useState } from 'react'

function Lorem() {
    const [count, setCount] = useState(0)
    const [words, setWords] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        if (amount <= 0) {
            amount = 0
        }
        if (amount > LOREMDATA.length) {
            amount = 20
        }
        setWords(LOREMDATA.slice(0, amount))
    }
    return (
        <LoremStyled>
            <h1>Lorem Ipsum Generator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='amount'>Paragraphs:</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type='submit'>Generate</button>
            </form>
            <article>
                {words.map((word, index) => {
                    return <p key={index}>{word}</p>
                })}
            </article>
        </LoremStyled>
    )
}

export default Lorem
