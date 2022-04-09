import {hotelConstant} from '../../constants'

export function available_hotels(state = {}, action){
    switch(action.type){
        case hotelConstant.GET_AVAILABLE_HOTEL_REQUEST:
            return {
                gettingAvailableHotels: true,
                bookingInfo: action.bookingInfo
            }
        case hotelConstant.GET_AVAILABLE_HOTEL_SUCCESS:
            return {
                gotAvailableHotels: true,
                availableHotels: action.availableHotels
            }

        case hotelConstant.GET_AVAILABLE_HOTEL_FAILURE:
            return {}
        default:
            return state
    }
}