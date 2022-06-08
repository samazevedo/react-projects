import { useState, useEffect } from 'react'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function Tour() {
    const [loading, setLoading] = useState(false)
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        setLoading(true)

        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
            //console.log(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTours()
    }, [])

    if (loading) {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} />
        </main>
    )
}

export default Tour
