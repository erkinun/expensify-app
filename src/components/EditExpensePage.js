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
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.editExpense}/>
                    <button onClick={this.removeExpense}>Remove</button>
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
    editExpense: (expense) => dispatch(startEditExpense(expense.id, expense)),
    removeExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
