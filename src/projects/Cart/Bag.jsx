import { BagStyled } from './Cart.styled'
import { BagItem } from './BagItem'
import { useGlobalContext } from './context'
import { useEffect } from 'react'

export const Bag = () => {
    const { ClearList, list, total, totalPrice } = useGlobalContext()

    if (list.length === 0) {
        return (
            <BagStyled>
                <div className='empy-list'>
                    <h2>Your bag is empty</h2>
                </div>
            </BagStyled>
        )
    }

    return (
        <BagStyled>
            {list.map((item) => {
                return <BagItem key={item.id} {...item} />
            })}
            <div className='horizontal-line'></div>
            <div className='checkout'>
                <div className='price-box'>
                    <p className='total'>Total</p>
                    <p className='total-price'>{total}</p>
                </div>
                <button onClick={ClearList}>Clear Cart</button>
            </div>
        </BagStyled>
    )
}
