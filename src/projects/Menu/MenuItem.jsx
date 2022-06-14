import { MenuItemStyled } from './Menu.styled'
import { BgImage } from '../../components/BgImage/BgImage'

function MenuItem({ items }) {
    return (
        <MenuItemStyled>
            {items.map((item, index) => {
                const { title, price, image, description } = item
                return (
                    <div key={index} className='item-box'>
                        <figure className='img-container'>
                            <BgImage image={image} />
                        </figure>
                        <div className='info'>
                            <header>
                                <div>
                                    <h3>{title}</h3>
                                    <div className='title-underscore'></div>
                                </div>

                                <p>{price}</p>
                            </header>
                            <p>{description}</p>
                        </div>
                    </div>
                )

                //     return (<>
                //         <figure className='img-container'>
                //     <BgImage image={image} />
                // </figure>
                // <div className='info'>
                //     <header>
                //         <h3>{title}</h3>
                //         <p>{price}</p>
                //     </header>
                //     <p>{description}</p>
                // </div>
                // </>
                //     )
            })}
        </MenuItemStyled>
    )
}

export default MenuItem
