import React from 'react';
import { connect } from 'react-redux';

const Header = ({ budget }) => {
    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">%Month%</span>:
                </div>

                <div className="budget__value">
                    {Math.sign(budget.totalBudget) === 1 ? ('+') : ('')}
                    {budget.totalBudget}
                </div>

                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ {budget.totalIncome}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>

                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {budget.totalExpense}</div>
                        <div className="budget__expenses--percentage">
                            {budget.totalIncome > 0 ?
                                Math.round((budget.totalExpense / budget.totalIncome) * 100) : ('0')
                            }%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { budget: state.budget };
}

export default connect(mapStateToProps)(Header);