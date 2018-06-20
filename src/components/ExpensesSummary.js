import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expenseTotals from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div>
        Viewing {props.expenses.length} {props.expenses.length > 1 ? 'expenses': 'expense'} totalling {numeral(expenseTotals(props.expenses) / 100).format('$0,0.00')} 
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)