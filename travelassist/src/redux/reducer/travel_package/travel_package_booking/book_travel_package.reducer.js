import {travelPackageConstant} from '../../../constants'

export function bookTravelPackage(state = {}, action){
    switch(action.type){
        case travelPackageConstant.BOOK_TRAVEL_PACKAGE_REQUEST:
            return {
                bookingTravelPackage: true,
                travelPackageBookingInfo: action.travelPackageBookingInfo
            }
        case travelPackageConstant.BOOK_TRAVEL_PACKAGE_SUCCESS:
            return {
                travelPackageBookingInfo: action.travelPackageBookingInfo
            }
        case travelPackageConstant.BOOK_TRAVEL_PACKAGE_FAILURE:
            return {}
        default:
            return state
    }
}