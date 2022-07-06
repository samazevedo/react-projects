import { BagStyled } from './Cart.styled'
import { BagItem } from './BagItem'
import data from './data'

export const Bag = () => {
    return (
        <BagStyled>
            {data.map((item) => {
                return <BagItem key={item.id} {...item} />
            })}
            <div className='horizontal-line'></div>
            <div className='checkout'>
                <div className='price-box'>
                    <p className='total'>Total</p>
                    <p className='total-price'>999.00</p>
                </div>
                <button>Clear Cart</button>
            </div>
        </BagStyled>
    )
}
