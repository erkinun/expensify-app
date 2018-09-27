import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth'

export const Header = ({logout}) => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/dashboard" exact={true} activeClassName="is-active">Dashboard</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></p>
        <p><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></p>
        <button onClick={logout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
      dispatch(startLogout())
  }
})

export default connect(undefined, mapDispatchToProps)(Header)