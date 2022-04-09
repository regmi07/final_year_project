import {hotelConstant} from '../../constants'

export function hotelById(state = {}, action){
    switch(action.type){
        case hotelConstant.GET_HOTEL_BY_ID_REQUEST:
            return {
                gettingHotelById: true,
                hotelId: action.hotelId
            }
        case hotelConstant.GET_HOTEL_BY_ID_SUCCESS:
            return {
                gotHotelById: true,
                hotelById: action.hotelById
            }

        case hotelConstant.GET_HOTEL_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}