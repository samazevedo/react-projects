import { MenuStyled } from './Menu.styled'
import MenuItem from './MenuItem'
import { MENULIST } from './data'
import MenuBtns from './MenuBtns'
import { useState } from 'react'

const categories = ['All', ...new Set(MENULIST.map((item) => item.category))]

function Menu() {
    const [category, setCategory] = useState(categories)
    const [menuItems, setMenuItems] = useState(MENULIST)

    const filterItems = (category) => {
        if (category === 'All') {
            setCategory(categories)
            setMenuItems(MENULIST)
        } else {
            setMenuItems(MENULIST.filter((item) => item.category === category))
        }
    }

    return (
        <MenuStyled>
            <header>
                <h1>Menu</h1>
                <div className='underline'></div>
            </header>
            <section className='categories-menu'>
                <MenuBtns categories={category} filterItems={filterItems} />
            </section>
            <section className='menu-items'>
                <MenuItem items={menuItems} filterItems={filterItems} />
            </section>
        </MenuStyled>
    )
}

export default Menu
