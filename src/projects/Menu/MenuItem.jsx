import { MenuItemStyled } from './Menu.styled'
import { BgImage } from '../../components/BgImage/BgImage'

function MenuItem({ title, price, description, image }) {
    return (
        <MenuItemStyled>
            <figure className='img-container'>
                <BgImage image={image} />
            </figure>
            <div className='info'>
                <header>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </header>
                <p>{description}</p>
            </div>
        </MenuItemStyled>
    )
}

export default MenuItem
