import { useState } from 'react'
import { ColorStyled } from './Color.styled'
import { hexToRgb, rgbToHex, rgbToShadeList } from '../../utils/Colors'
import SingleColor from './SingleColor'

function Color() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(color)

        if (color.length <= 3 || color.length >= 8) {
            setError(true)
            setColor('type a valid hex color')
        } else {
            setError(false)
            const rgb = hexToRgb(color)

            setList(rgb)
            console.log(list)
        }
    }
    return (
        <ColorStyled>
            <header>
                <h1>Palette Color Generator</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='color-hex'>Enter a value:</label>
                    <input
                        type='text'
                        name='color-hex'
                        id='color-hex'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#A5FF6D'
                        className={`${error ? 'error' : null}`}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </section>
            <section>
                <SingleColor color={color} />
            </section>
        </ColorStyled>
    )
}

export default Color
