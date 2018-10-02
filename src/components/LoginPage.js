import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="box_layout">
        <div className="box">
          <h1 className="title">Expensify</h1>
          <p>It's time to track your expenses from web</p>
          <button className="button" onClick={this.props.startLogin}>Login with Google</button>
        </div>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)