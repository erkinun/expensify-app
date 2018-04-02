import React from 'react'
import { Link } from 'react-router-dom'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <span>{description}</span>
        </Link>
        <span>{amount} - {createdAt}</span>
    </div>
)


