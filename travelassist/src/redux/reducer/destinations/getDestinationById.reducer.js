import {destinationConstants} from '../../constants'

export function getDestinationById(state={}, action){
    switch(action.type){
        case destinationConstants.GET_DESTINATION_BY_ID_REQUEST:
            return {
                gettingDestinationsById: true
            }
        case destinationConstants.GET_DESTINATION_BY_ID_SUCCESS:
            return {
                gotDestinationsById: true,
                destinationById: action.destinationById
            }
        case destinationConstants.GET_DESTINATION_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}