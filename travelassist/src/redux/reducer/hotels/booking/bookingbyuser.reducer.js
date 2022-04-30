import {bookingConstant} from '../../../constants'

export function hotelBookingByUser(state={}, action){
    switch(action.type){
        case bookingConstant.GET_BOOKING_BY_USER_REQUEST:
            return{
                gettingBookingByUser: true,
            }
        case bookingConstant.GET_BOOKING_BY_USER_SUCCESS:
            return {
                gotBookingByUser: true,
                bookingByUser: action.bookingByUser
            }
        case bookingConstant.GET_BOOKING_BY_USER_FAILURE:
            return {}
        default:
            return state
    }
}