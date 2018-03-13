import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

/* const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></p>
        <p><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></p>
        <p><NavLink to="/help" activeClassName="is-active">Help</NavLink></p>
    </header>
); */

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter