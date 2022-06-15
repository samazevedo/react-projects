import { TabMenuStyled } from './Tab.styled'

function TabMenu({ companiesList, changeValue }) {
    return (
        <TabMenuStyled>
            <ul>
                {companiesList.map((company, index) => {
                    return (
                        <li key={index}>
                            <button
                                key={index}
                                onClick={() => console.log(changeValue)}
                            >
                                {company}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </TabMenuStyled>
    )
}

export default TabMenu
