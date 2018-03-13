export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text: text
})

export const sortByDate = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'date'
})

export const sortByAmount = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
})

export const setStartDate = (start = undefined) => ({
    type: 'SET_START_DATE',
    start
})

export const setEndDate = (end = undefined) => ({
    type: 'SET_END_DATE',
    end
})