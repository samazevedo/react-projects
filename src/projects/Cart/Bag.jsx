import { BagStyled } from './Cart.styled'
import { BagItem } from './BagItem'
import { useGlobalContext } from './context'

export const Bag = () => {
    const { ClearList, list, total } = useGlobalContext()

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
                const { id } = item
                return <BagItem key={id} {...item} />
            })}
            <div className='horizontal-line'></div>
            <div className='checkout'>
                <div className='price-box'>
                    <p className='total'>Total</p>
                    <p className='total-price'>${total}</p>
                </div>
                <button onClick={ClearList}>Clear Cart</button>
            </div>
        </BagStyled>
    )
}
