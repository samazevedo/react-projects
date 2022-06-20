import { useState } from 'react'
import { ColorStyled } from './Color.styled'
import {
    hexToRgb,
    rgbToHex,
    rgbToShadeList,
    randomRGBColor,
    randomHexColor,
} from '../../utils/Colors'
import SingleColor from './SingleColor'

function Color() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])
    // const [random, setRandom] = useState([])
    const randomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const randomColorList = randomList.map((item) => randomHexColor())
    const handleRandomList = () => {
        setList(randomColorList)
    }
    console.log(randomColorList)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(color)
        // Validate color input
        if (color.length <= 3 || color.length >= 8) {
            setError(true)
            setColor('type a valid hex color')
        } else {
            setError(false)
            const rgbColor = hexToRgb(color)
            console.log(rgbColor)
        }
    }
    const handleChange = (e) => {
        setColor(e.target.value)
        if (e.target.value[0] !== '#') {
            setColor.push(`${e.target.value[0]} ${e.target.value.push(1)}`)
        }
    }

    return (
        <ColorStyled>
            <div>
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
                            onChange={(e) => handleChange(e)}
                            placeholder='#A5FF6D'
                            className={`${error ? 'error' : null}`}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </section>
                <section>
                    <SingleColor color={color} />
                </section>
            </div>
            <section className='random-palette'>
                <h3>Random Palette</h3>
                <ul>
                    {randomColorList.map((color) => (
                        <li key={color}>
                            <SingleColor color={color} />
                        </li>
                    ))}
                </ul>
                <button onClick={() => handleRandomList()}>
                    Generate a new Palette
                </button>
            </section>
        </ColorStyled>
    )
}

export default Color
