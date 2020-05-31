export const addIncome = (data) => dispatch => {
    dispatch({
        type: 'ADD_INCOME',
        payload: data
    });
}

export const deleteIncome = (data) => dispatch => {
    dispatch({
        type: 'DELETE_INCOME',
        payload: data
    });
}

export const addExpense = (data) => dispatch => {
    dispatch({
        type: 'ADD_EXPENSE',
        payload: data
    });
}

export const deleteExpense = (data) => dispatch => {
    dispatch({
        type: 'DELETE_EXPENSE',
        payload: data
    });
}