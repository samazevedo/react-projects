const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_LIST':
            return { ...state, list: [] }
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload),
            }
        case 'INCREASE_AMOUNT':
            let tempList = state.list.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item
            })
            return {
                ...state,
                list: tempList,
            }
        case 'DECREASE_AMOUNT':
            let tempList2 = state.list.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 }
                }
                return item
            })
            return {
                ...state,
                list: tempList2,
            }
        default:
            return state
    }
}

export default reducer
