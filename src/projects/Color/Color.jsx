import { useState } from 'react'
import { ColorStyled, SingleColorStyled } from './Color.styled'
import { randomHexColor } from '../../utils/Colors'
import SingleColor from './SingleColor'
import { useEffect } from 'react'

function Color() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [randomColor, setRandomColor] = useState([])

    const handleRandomList = () => {
        setRandomColor([])
        setRandomColor(Array.from(Array(10).keys()).map(() => randomHexColor()))
    }
    useEffect(() => {
        handleRandomList()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            (color.length === 7 || color.length === 4) &&
            color.startsWith('#')
        ) {
            setError(false)
        } else if (
            color.length[0] !== '#' &&
            (color.length === 3 || color.length === 6)
        ) {
            setError(false)

            console.log(color)
        } else {
            setError(true)
            return
        }
    }
    const handleChange = (e) => {
        setColor(e.target.value)
        console.log(color)
    }

    return (
        <ColorStyled>
            <div className='input-color'>
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
                <section className='output-color'>
                    <SingleColor color={color} />
                </section>
            </div>
            <section className='random-palette'>
                <h3>Random Palette</h3>
                <ul>
                    {randomColor.map((item, index) => (
                        <li key={index}>
                            <SingleColor color={item} />
                        </li>
                    ))}
                </ul>
                <button onClick={() => handleRandomList()}>New Palette</button>
            </section>
        </ColorStyled>
    )
}

export default Color
