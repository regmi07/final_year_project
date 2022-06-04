import {thingsToDoConstants} from '../../constants'

export function thingsToDoByDestinations(state ={}, action){
    switch(action.type){
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_REQUEST:
            return {
                gettingThingsToDoByDestination: true,
                destinationId: action.destinationId
            }
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_SUCCESS:
            return {
                gotThingsToDoByDestination: true,
                thingsToDoByDestination: action.thingsToDoByDestinations
            }
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_FAILURE:
            return {}
        default:
            return state
    }
}