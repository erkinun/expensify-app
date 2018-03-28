import React from 'react';
import { connect } from 'react-redux'

// edit page
const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            This is from my edit expense component for {props.match.params.id}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(e => e.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)