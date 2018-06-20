import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render a total of one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses.slice(0,1)}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render a total of all expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})