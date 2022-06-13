import { MenuStyled } from './Menu.styled'
import MenuItem from './MenuItem'
import { MENULIST } from './data'

function Menu() {
    return (
        <MenuStyled>
            <header>
                <h1>Menu</h1>
                <div className='underline'></div>
            </header>
            <section className='menu-items'>
                {MENULIST.map((item) => (
                    <MenuItem key={item.id} {...item} />
                ))}
            </section>
        </MenuStyled>
    )
}

export default Menu
