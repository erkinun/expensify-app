import React from 'react'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <span>{description}</span>
        </Link>
        <span>{amount} - {createdAt}</span>
        <button onClick={(e) => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)

