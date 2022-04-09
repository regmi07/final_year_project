import {updateCheckinConstants} from '../constants/index'
import dayjs from 'dayjs'

const initialState = {
    checkindate: dayjs().format('YYYY-MM-DD'),
    checkoutdate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    rooms: 1,
    traveller: 2
}
export function updateCheckIn(state = initialState, action){
    console.log('checkincheckout reducer called')
    switch(action.type){
        case updateCheckinConstants.UPDATE_CHECKIN_DATE:
            return {
                ...state, checkindate: action.checkInDate, 
                checkoutdate: dayjs(action.checkInDate).add(1,'day').format('YYYY-MM-DD')
            }
        case updateCheckinConstants.UPDATE_CHECKOUT_DATE:
            return {
                ...state, checkoutdate: action.checkOutDate 
            }
        case updateCheckinConstants.UPDATE_ROOMS_TRAVELLER:
            return {
                ...state, rooms: action.rooms_traveller.rooms, traveller: action.rooms_traveller.traveller
            }
        default: 
            return state
    }
}