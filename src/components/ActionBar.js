import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addIncome, addExpense } from '../actions';

class ActionBar extends React.Component {
    state = {
        budget_type: 'inc',
        budget_description: '',
        budget_value: '',
        focus_class: '',
        btn_class: ''
    }

    budgetHandler = () => {
        const { budget_description, budget_value, budget_type } = this.state;

        if (budget_description !== '' || budget_value !== '') {
            const data = {
                id: uuidv4(),
                budget_description: budget_description,
                budget_value: parseInt(budget_value)
            };

            if (budget_type === 'inc') {
                this.props.addIncome(data);
            } else {
                this.props.addExpense(data);
            }

            this.setState({
                budget_description: '',
                budget_value: ''
            });
        }
    }

    budgetTypeHandler = (e) => {
        if(this.state.focus_class === '' || this.state.btn_class === '') {
            this.setState({ 
                budget_type: e.target.value,
                focus_class: 'red-focus',
                btn_class: 'red'
            });
        } else {
            this.setState({ 
                budget_type: e.target.value,
                focus_class: '',
                btn_class: ''
            });
        }
    }

    render() {
        return (
            <div className="add">
                <div className="add__container">
                    <select className={"add__type " + this.state.focus_class}
                        value={this.state.budget_type}
                        onChange={this.budgetTypeHandler}
                    >
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" className={"add__description " + this.state.focus_class} placeholder="Add description"
                        value={this.state.budget_description}
                        onChange={(e) => this.setState({ budget_description: e.target.value })}
                    />
                    <input type="number" className={"add__value " + this.state.focus_class} placeholder="Value"
                        value={this.state.budget_value}
                        onChange={(e) => this.setState({ budget_value: e.target.value > 0 ? e.target.value : '' })}
                    />
                    <button className={"add__btn " + this.state.btn_class} onClick={this.budgetHandler}>
                        <i className="ion-ios-checkmark-outline"></i>
                    </button>
                </div>
            </div>
        );
    }
};

export default connect(null, { addIncome, addExpense })(ActionBar);