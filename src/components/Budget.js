import React from 'react';
import { connect } from 'react-redux';
import { deleteIncome, deleteExpense } from '../actions';

const Budget = ({ BudgetType, detail, deleteIncome, deleteExpense, totalIncome }) => {
    const deleteHandler = () => {
        const data = {
            id: detail.id,
            budget_value: detail.budget_value
        }

        if(BudgetType === 'income') {
            deleteIncome(data);
        } else {
            deleteExpense(data);
        }
    }

    return (
        <div className="item clearfix" id="expense-0">
            <div className="item__description">{detail.budget_description}</div>
            <div className="right clearfix">
                <div className="item__value">{detail.budget_value}</div>
                {BudgetType === 'expense' ? (
                    <div className="item__percentage">
                        {Math.round((detail.budget_value / totalIncome) * 100)}%
                    </div>
                ) : ('')}
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={deleteHandler}>
                        <i className="ion-ios-close-outline"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { deleteIncome, deleteExpense })(Budget);

