import {travelPackageConstant} from '../../../constants'

export function getTravelPackageBookingByBookingId(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_REQUEST:
            return {
                gettingTravelPackageBookingById: true,
                package_booking_id: action.package_booking_id
            }
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_SUCCESS:
            return {
                travelPackageBookingById: action.travelPackageBookingById
            }
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_FAILURE:
            return {}
        default: 
            return state
    }
}