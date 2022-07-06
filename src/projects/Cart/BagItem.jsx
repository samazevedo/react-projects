import { BagItemStyled } from './Cart.styled'
import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

export const BagItem = ({ image, title, price }) => {
    return (
        <BagItemStyled>
            <div className='image'>
                <img src={image} alt={title} />
            </div>
            <div className='info'>
                <h3>{title}</h3>
                <p>{price}</p>
                <button>remove</button>
            </div>
            <div className='actions'>
                <button>
                    <FaAngleUp />
                </button>
                <input type='text' value='1' />
                <button>
                    <FaAngleDown />
                </button>
            </div>
        </BagItemStyled>
    )
}
