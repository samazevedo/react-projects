import { BagItemStyled } from './Cart.styled'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useGlobalContext } from './context'

export const BagItem = ({ image, title, price, id, amount }) => {
    const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext()

    return (
        <BagItemStyled>
            <div className='image'>
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <h3>{title}</h3>
                <p>{price}</p>
                <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className='actions'>
                <button>
                    <FaAngleUp onClick={() => increaseAmount(id)} />
                </button>
                <p className='amount'>{amount}</p>
                <button>
                    <FaAngleDown onClick={() => decreaseAmount(id)} />
                </button>
            </div>
        </BagItemStyled>
    )
}
