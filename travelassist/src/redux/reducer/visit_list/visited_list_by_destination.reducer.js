import { visitListConstants } from "../../constants";

export function visitedListByDestination(state = {}, action){
    switch(action.type){
        case visitListConstants.GET_VISITED_LIST_BY_DESTINATION_REQUEST:
            return {
                gettingVisitedListByDestination: true,
                destination: action.destination
            }
        case visitListConstants.GET_VISITED_LIST_BY_DESTINATION_SUCCESS:
            return {
                gotVisitedListByDestination: true,
                visitedListByDestination: action.visitedListByDestination
            }
        case visitListConstants.GET_VISITED_LIST_BY_DESTINATION_FAILURE:
            return {}
        default:
            return state
    }
}