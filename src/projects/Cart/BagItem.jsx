import { BagItemStyled } from './Cart.styled'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useGlobalContext } from './context'

export const BagItem = ({ image, title, price, id }) => {
    const { handleChange, removeItem, AddItem, SubItem, count } =
        useGlobalContext()

    return (
        <BagItemStyled>
            <div className='image'>
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <h3>{title}</h3>
                <p>{price}</p>
                <button id={id} onClick={() => removeItem(id)}>
                    remove
                </button>
            </div>
            <div className='actions'>
                <button>
                    <FaAngleUp id={id} onClick={(e) => AddItem(e)} />
                </button>
                <input
                    type='text'
                    value={count}
                    onChange={(e) => handleChange(e)}
                />
                <button>
                    <FaAngleDown onClick={SubItem} />
                </button>
            </div>
        </BagItemStyled>
    )
}
