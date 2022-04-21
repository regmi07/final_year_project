import { travelPackageConstant } from "../../../constants";

export function addItineraryToTravelPackage(state = {}, action){
    switch(action.type){
        case travelPackageConstant.ADD_ITINERARY_REQUEST:
            return {
                addingItineraryToTravelPackage: true,
                itinerary: action.itinerary
            }
        case travelPackageConstant.ADD_ITINERARY_SUCCESS:
            return {
                createdItinerary: action.createdItinerary
            }
        case travelPackageConstant.ADD_ITINERARY_FAILURE:
            return {}
        default:
            return state
    }
}