import { travelPackageConstant } from "../../../constants";

export function updateItinerary(state = {}, action){
    switch(action.type){
        case travelPackageConstant.UPDATE_ITINERARY_REQUEST:
            return {
                updatingItinerary: true,
                itinerary: action.itinerary
            }
        case travelPackageConstant.UPDATE_ITINERARY_SUCCESS:
            return {
                updatedItinerary: action.updatedItinerary
            }
        case travelPackageConstant.UPDATE_ITINERARY_FAILURE:
            return {}
        default:
            return state
    }
}