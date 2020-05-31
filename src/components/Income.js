import React from 'react';
import { connect } from 'react-redux';
import Budget from './Budget';

const Income = ({ incomes }) => {
    const IncomeList = () => {
        return (
            <div className="income__list">
                {incomes.map(income => <Budget key={income.id} BudgetType="income" detail={income} />)}
            </div>
        )
    }


    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            <IncomeList />
        </div>
    )
};

const mapStateToProps = (state) => {
    return { 
        incomes: state.budget.incomes
    };
}

export default connect(mapStateToProps)(Income);