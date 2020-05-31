import React from 'react';
import { connect } from 'react-redux';
import Budget from './Budget';

const Expense = ({ expenses, totalIncome }) => {
    const ExpenseList = () => {
        return (
            <div className="expenses__list">
                {expenses.map(expense => <Budget key={expense.id} BudgetType="expense" detail={expense} totalIncome={totalIncome}/>)}
            </div>
        )
    }

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            <ExpenseList />
        </div>
    )
};

const mapStateToProps = (state) => {
    return { 
        expenses: state.budget.expenses,
        totalIncome: state.budget.totalIncome 
    }
}

export default connect(mapStateToProps)(Expense);