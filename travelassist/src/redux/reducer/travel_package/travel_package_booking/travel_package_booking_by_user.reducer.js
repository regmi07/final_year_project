import {travelPackageConstant} from '../../../constants'

export function getTravelPackageByUser(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_REQUEST:
            return {
                gettingTravelPackageByUser: true,
                user_id: action.user_id
            } 
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_SUCCESS:
            return {
                travelPackageBookingByUser: action.travelPackageBookingByUser
            }
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_FAILURE:
            return {}
        default:
            return state
    }
}