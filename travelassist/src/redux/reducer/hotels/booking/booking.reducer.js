import {bookingConstant} from '../../../constants'

export function bookHotel(state = {}, action){
    switch(action.type){
        case bookingConstant.PAYMENT_REQUEST:
            return {
                type: 'requesting payment',
                paymentDetails: action.paymentDetails
            }
        case bookingConstant.PAYMENT_SUCCESS:
            return {
                type: 'payment success',
                paymentDetails: action.paymentDetails
            }
        case bookingConstant.PAYMENT_FAILURE:
            return {}
        case bookingConstant.BOOKING_REQUEST:
            return {
                type: 'requesting booking', 
                bookingDetails: action.bookingDetails
            }
        case bookingConstant.BOOKING_SUCCESS:
            return {
                type: 'booking success',
                bookingDetails: action.bookingDetails
            }
        case bookingConstant.BOOKING_FAILURE:
            return {}
        default:
            return state
    }
}