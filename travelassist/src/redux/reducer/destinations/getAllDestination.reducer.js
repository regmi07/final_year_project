import {destinationConstants} from '../../constants'

export function getAllDestination(state={}, action){
    switch(action.type){
        case destinationConstants.GET_ALL_DESTINATION_REQUEST:
            return {
                gettingAllDestinations: true
            }
        case destinationConstants.GET_ALL_DESTINATION_SUCCESS:
            return {
                gotAllDestinations: true,
                allDestinations: action.allDestinations
            }
        case destinationConstants.GET_ALL_DESTINATION_FAILURE:
            return {}
        default:
            return state
    }
}