import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth'

export const Header = ({logout}) => (
    <header className="header">
        <div className="content-container">
            <div className="content">
                <Link className="title" to="/dashboard" exact={true}>
                    <h1>Expensify</h1>
                </Link>
                <button className="button link" onClick={logout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
      dispatch(startLogout())
  }
})

export default connect(undefined, mapDispatchToProps)(Header)