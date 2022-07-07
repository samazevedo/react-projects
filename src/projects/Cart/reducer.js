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
            let tempList2 = state.list
                .map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, amount: item.amount - 1 }
                    }
                    return item
                })
                .filter((item) => item.amount !== 0)
            return {
                ...state,
                list: tempList2,
            }
        case 'GET_TOTALS':
            const { total, amount } = state.list.reduce(
                (listTotal, item) => {
                    const { price, amount } = item
                    const totalPrice = listTotal.total + price * amount

                    listTotal.total = +totalPrice.toFixed(2)
                    listTotal.amount += amount
                    return listTotal
                },
                {
                    total: 0,
                    amount: 0,
                }
            )
            return { ...state, total, amount }
        default:
            return state
    }
}

export default reducer
