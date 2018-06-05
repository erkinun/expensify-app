import moment from 'moment'

const defaultFilterState = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment().endOf('month')
}

export default (state = defaultFilterState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text 
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE': 
            return  {
                ...state,
                startDate: action.start
            }
        case 'SET_END_DATE': 
            return  {
                ...state,
                endDate: action.end
            }            
        default:
            return state
    }
}