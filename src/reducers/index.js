import { combineReducers } from 'redux';

const initialState = {
    totalIncome: 0,
    totalExpense: 0,
    totalBudget: 0,
    incomes: [],
    expenses: []
};

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
                totalIncome: state.totalIncome + action.payload.budget_value,
                totalBudget: state.totalBudget + action.payload.budget_value
            };
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
                totalExpense: state.totalExpense + action.payload.budget_value,
                totalBudget: state.totalBudget - action.payload.budget_value
            };;
        case 'DELETE_INCOME':
            return {
                ...state,
                incomes: state.incomes.filter(income => income.id !== action.payload.id),
                totalIncome: state.totalIncome - action.payload.budget_value,
                totalBudget: state.totalBudget - action.payload.budget_value
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
                totalExpense: state.totalExpense - action.payload.budget_value,
                totalBudget: state.totalBudget + action.payload.budget_value
            };
        default:
            return state;
    }
}

export default combineReducers({
    budget: budgetReducer
});