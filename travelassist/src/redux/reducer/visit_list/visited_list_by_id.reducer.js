import { visitListConstants } from "../../constants";

export function visitedListById(state = {}, action){
    switch(action.type){
        case visitListConstants.GET_VISITED_LIST_BY_ID_REQUEST:
            return {
                gettingVisitedListById: true,
                for: action.for
            }
        case visitListConstants.GET_VISITED_LIST_BY_ID_SUCCESS:
            return {
                gotVisitedListById: true,
                visitedListById: action.visitedListById
            }
        case visitListConstants.GET_VISITED_LIST_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}