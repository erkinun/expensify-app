import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

const now = moment()

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'id': props.expense ? props.expense.id : '',
            'description': props.expense ? props.expense.description : '',
            'note': props.expense ? props.expense.note : '',
            'amount': props.expense ? (props.expense.amount / 100).toString()  : '',
            'createdAt': props.expense ? moment(props.expense.createdAt) : moment(),
            'calendarFocused': false,
            'error': ''
        }
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value 
        this.setState(() => ({ description }))
    } 

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            // set error 
            this.setState(() => ({ error: 'you have to supply both description and amount' }))
        }
        else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                id: this.state.id
            })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <input 
                    type="text"
                    className="text-input"
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}/>
                <SingleDatePicker 
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea 
                    placeholder="note"
                    className="textarea-input"
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                </textarea>
                <div>
                    {this.state.id != '' && <button className="button">Edit Expense</button>}
                    {this.state.id == '' && <button className="button">Add Expense</button>}
                </div>
            </form>
        )
    }
}

export default ExpenseForm