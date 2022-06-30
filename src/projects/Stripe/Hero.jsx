import { useGlobalContext } from './context'

function Hero() {
    const data = useGlobalContext()
    console.log(data)
    return <div>Hero</div>
}

export default Hero
