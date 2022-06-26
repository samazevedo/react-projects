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

        if (!item || item.length < 3) {
            showAlert(true, 'danger', 'Please enter an item')
        } else if (item && edit) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return {
                            ...item,
                            title: item,
                        }
                    }
                    return item
                })
            )

            setItem('')
            setEditID(null)
            setEdit(false)
            showAlert(true, 'success', 'Item updated')
        } else {
            showAlert(true, 'success', 'Item added')
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
    const handleDelete = (id) => {
        showAlert(true, 'danger', 'Item deleted')
        setList(list.filter((item) => item.id !== id))
    }
    const handleEdit = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setEdit(true)
        setEditID(id)
        setItem(specificItem.title)
    }
    const clearList = () => {
        showAlert(true, 'danger', 'List cleared')
        setList([])
    }

    return (
        <GroceryStyled>
            {alert.show && (
                <Alert {...alert} showAlert={showAlert} list={list} />
            )}
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
                                        onClick={() => handleDelete(id)}
                                        className='icon trash'
                                    />
                                    <FaEdit
                                        id={id}
                                        onClick={() => handleEdit(id)}
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
