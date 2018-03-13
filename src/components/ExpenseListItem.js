import React from 'react'
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <span>{description}</span>
        <span>{amount} - {createdAt}</span>
        <button onClick={(e) => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)

