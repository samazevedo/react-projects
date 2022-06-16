import { useState } from 'react'
import { ColorStyled } from './Color.styled'

function Color() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('working')
    }
    return (
        <ColorStyled>
            <header>
                <h1>Palette Color Generator</h1>
            </header>
            <section>
                <form onSubmit={() => handleSubmit}>
                    <label htmlFor='color-hex'>Enter a value:</label>
                    <input
                        type='text'
                        name='color-hex'
                        id='color-hex'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#A5FF6D'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </section>
            <section>
                <div className='colors'>colors go here</div>
            </section>
        </ColorStyled>
    )
}

export default Color
