import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'

// edit page
export class EditExpensePage extends React.Component {

    editExpense = (expense) => {
        this.props.editExpense(expense)
        this.props.history.push('/') 
    }

    removeExpense = (e) => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.editExpense}/>
                        <button className="secondary-button" onClick={this.removeExpense}>Remove Expense</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((e) => e.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (expense) => dispatch(startEditExpense(expense.id, {
        amount: expense.amount,
        note: expense.note,
        description: expense.description,
        createdAt: expense.createdAt
    })),
    removeExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
