import { AlertStyled } from './Grocery.styled'
import { useEffect } from 'react'

function Alert({ message, type, showAlert, list }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [list, showAlert])

    return (
        <AlertStyled>
            <p className={`alert ${type}`}>{message}</p>
        </AlertStyled>
    )
}

export default Alert
