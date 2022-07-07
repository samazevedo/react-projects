import { useContext, createContext, useState, useReducer } from 'react'
import data from './data'
const AppContext = createContext()
import reducer from './reducer'

const initialState = {
    list: data,
    total: 0,
    amount: 0,
}

export const AppProvider = ({ children }) => {
    const [list, setList] = useState(data)
    const [state, dispatch] = useReducer()
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)

    const ClearList = () => {
        setList([])
    }
    const removeItem = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)
        console.log(id)
    }
    const AddItem = (e) => {
        setCount(count + 1)
        if (count >= 10) {
            setCount(10)
        }
    }
    const SubItem = () => {
        setCount(count - 1)
        if (count <= 0) {
            setCount(0)
        }
    }
    const handleChange = (e) => {
        console.log('hi')
    }
    const totalPrice = () => {
        let total = 0
        list.forEach((item) => {
            total += Number(item.price * item.count)
        })
        setTotal(total)
    }
    return (
        <AppContext.Provider
            value={{
                list,
                ClearList,
                AddItem,
                SubItem,
                count,
                handleChange,
                removeItem,
                total,
                totalPrice,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
