import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setEndDate = jest.fn()
    setStartDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters filters={filters} setTextFilter={setTextFilter} sortByAmount={sortByAmount} sortByDate={sortByDate} setStartDate={setStartDate} setEndDate={setEndDate}/>
    )
})

test("should render snapshot", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should render with alternative data correctly", () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot()
})