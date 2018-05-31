import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

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

test("should handle text change", () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: 'rent'
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('rent')
})

test("should handle sort by date", () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test("should handle sort by amount", () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test("should handle date changes", () => {
    const end = moment(0).add(3, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: moment(0),
        endDate: end
    })
    expect(setEndDate).toHaveBeenLastCalledWith(end)
    expect(setStartDate).toHaveBeenLastCalledWith(moment(0))
})

test("should handle date focus changes", () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')("startDate")
    expect(wrapper.state('calendarFocused')).toBe("startDate")
})