import React from 'react';
import ActionBar from './ActionBar';
import Income from './Income';
import Expense from './Expense';

const Bottom = () => {
    return (
        <div className="bottom">
            <ActionBar />
            <div className="container clearfix">
                <Income />
                <Expense />
            </div>
        </div>
    )
};

export default Bottom;