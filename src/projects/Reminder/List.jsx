import { ListItem } from './List.styled'

function List({ people }) {
    return (
        <>
            {people.map((person) => {
                const { id, name, image, age } = person
                return (
                    <ListItem key={id}>
                        <div className='picture'>
                            <img src={image} alt={name} />
                        </div>

                        <div className='info'>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </ListItem>
                )
            })}
        </>
    )
}

export default List
