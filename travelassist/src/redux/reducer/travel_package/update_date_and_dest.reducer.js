import {updateDateAndDestinationConstants} from '../../constants'
import dayjs from 'dayjs'

const initialState = {
    from: 0,
    to: 0,
    start_date: dayjs().format('YYYY-MM-DD'),
    end_date: '',
    total_traveler: 1
}

export function updateDateAndDest(state = initialState, action){
    switch(action.type){
        case updateDateAndDestinationConstants.UPDATE_FROM:
            return {...state, from: action.from}
        case updateDateAndDestinationConstants.UPDATE_TO:
            return {...state, to: action.to}
        case updateDateAndDestinationConstants.UPDATE_DEPARTURE:
            return {...state, start_date: action.start_date}
        case updateDateAndDestinationConstants.UPDATE_RETURN:
            return {...state, end_date: action.end_date}
        case updateDateAndDestinationConstants.UPDATE_TRAVELLER:
            return {...state, total_traveler: action.total_traveler}
        default:
            return state
    }
}