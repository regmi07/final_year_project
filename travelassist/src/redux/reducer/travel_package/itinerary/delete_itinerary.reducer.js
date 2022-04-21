import { travelPackageConstant } from "../../../constants";

export function deleteItineraryById(state = {}, action){
    switch(action.type){
        case travelPackageConstant.DELETE_ITINERARY_REQUEST:
            return {
                deletingItinerary: true,
                itinerary_id: action.itinerary_id
            }
        case travelPackageConstant.DELETE_ITINERARY_SUCCESS:
            return {
                deletedItineraryId: action.deletedItineraryId
            }
        case travelPackageConstant.DELETE_ITINERARY_FAILURE:
            return {}
        default:
            return state
    }
}