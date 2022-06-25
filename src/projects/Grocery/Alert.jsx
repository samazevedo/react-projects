import { AlertStyled } from './Grocery.styled'
import { useEffect } from 'react'

function Alert({ message, type, showAlert }) {
    useEffect(() => {
        setTimeout(() => {
            showAlert(false)
        }, 3000)
    }, [showAlert])

    return (
        <AlertStyled>
            <p className={`alert ${type}`}>{message}</p>
        </AlertStyled>
    )
}

export default Alert
