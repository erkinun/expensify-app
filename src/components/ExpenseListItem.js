import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="title">{description}</h3>
            <span className="subtitle">{moment(createdAt).format('Do MMMM YYYY')}</span>
        </div>
        <h3 className="data">{numeral(amount / 100).format('$0,0.00')} </h3>
    </Link>
)
