import { MenuButtons } from './Menu.styled'

function MenuBtns({ categories, filterItems }) {
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <MenuButtons
                        onClick={() => filterItems(category)}
                        key={index}
                    >
                        {category}
                    </MenuButtons>
                )
            })}
        </div>
    )
}

export default MenuBtns
