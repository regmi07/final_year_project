import { travelPackageConstant } from "../../../constants";

export function getItineraryByTravelPackage(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_ITINERARY_REQUEST:
            return {
                gettingItineraryByTravelPackage: true,
                travel_package_id: action.travel_package_id
            }
        case travelPackageConstant.GET_ITINERARY_SUCCESS:
            console.log('success called')
            return {
                itineraryByTravelPackage: action.itineraryByTravelPackage
            }
        case travelPackageConstant.GET_ITINERARY_FAILURE:
            return {}
        default:
            return state
    }
}