import {travelPackageConstant} from '../../constants'

export function getAvailableTravelPackageForBooking(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_REQUEST:
            return {
                gettingAvailablTravelPackage: true,
                selectedDate: action.selectedDate
            }
        case travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_SUCCESS:
            return {
                availableTravelPackage: action.availableTravelPackage
            }
        case travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_FAILURE:
            return {}
        default:
            return state
    }
}