import {thingsToDoConstants} from '../../constants'

export function thingsToDoById(state ={}, action){
    switch(action.type){
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_REQUEST:
            return {
                gettingThingsToDoById: true,
                thingsToDoId: action.thingsToDoId
            }
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_SUCCESS:
            return {
                gotThingsToDoById: true,
                thingsToDoById: action.thingsToDoById
            }
        case thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}