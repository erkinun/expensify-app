import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import expenseTotals from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
    const expenseCount = props.expenses.length
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense'
    const total = numeral(expenseTotals(props.expenses) / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="title">Viewing <span>{expenseCount} {expenseWord}</span> totalling <span>{total}</span> </h1>
                <div className="actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)