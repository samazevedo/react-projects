import { useContext, createContext, useReducer } from 'react'
import data from './data'
import reducer from './reducer'

const AppContext = createContext()
const initialState = {
    list: data,
    total: 0,
    amount: 0,
}

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const ClearList = () => {
        dispatch({ type: 'CLEAR_LIST' })
    }
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
    const increaseAmount = (id) => {
        dispatch({ type: 'INCREASE_AMOUNT', payload: id })
    }
    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREASE_AMOUNT', payload: id })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                ClearList,
                removeItem,
                increaseAmount,
                decreaseAmount,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
