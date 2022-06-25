import { GroceryStyled, GroceryList } from './Grocery.styled'
import { useState } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import Alert from './Alert'

function Grocery() {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')
    const [edit, setEdit] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: 'danger',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!item || item.length === '') {
            //display alert
            showAlert(true, 'danger', 'Please enter a valid item')
        } else if (item && edit) {
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: item,
            }
            setList([...list, newItem])
            setItem('')
        }
    }
    const showAlert = (show = false, type = '', message = '') => {
        setAlert({ show, type, message })
    }
    const handleDelete = (e) => {
        e.preventDefault()
        const index = e.target.id
        const newGroceryList = [...list]
        newGroceryList.splice(index, 1)
        setList(newGroceryList)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const index = e.target.id
        const newGroceryList = [...list]
        newGroceryList[index] = e.target.value
        setList(newGroceryList)
    }
    const clearList = () => {
        setList([])
    }
    return (
        <GroceryStyled>
            {alert.show && <Alert {...alert} showAlert={showAlert} />}
            <section className='container'>
                <h1>Grocery List</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        placeholder='e.g. milk'
                    />
                    <button type='submit'>{edit ? 'Edit' : 'Add'}</button>
                </form>
                <GroceryList>
                    {list.length > 0 &&
                        list.map((item) => {
                            const { id, title } = item
                            return (
                                <li key={id}>
                                    <span>{title}</span>
                                    <FaTrashAlt
                                        id={id}
                                        onClick={handleDelete}
                                        className='icon trash'
                                    />
                                    <FaEdit
                                        id={id}
                                        onClick={() => {
                                            setEdit(true)
                                            setEditID(id)
                                        }}
                                        className='icon edit'
                                    />
                                </li>
                            )
                        })}
                </GroceryList>
                <button className='clear-list' onClick={() => clearList()}>
                    Clear List
                </button>
            </section>
        </GroceryStyled>
    )
}

export default Grocery
