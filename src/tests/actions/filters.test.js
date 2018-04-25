import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        start: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        end: moment(0)
    })
})

test('should generate an empty text action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})

test('should generate a text action object', () => {
    const action = setTextFilter('some text')
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'some text'
    })
})

test('should generate a sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        sortBy: 'date'
    })
})

test('should generate a sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        sortBy: 'date'
    })
})