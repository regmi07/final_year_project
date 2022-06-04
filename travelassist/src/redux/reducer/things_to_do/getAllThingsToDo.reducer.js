import {thingsToDoConstants} from '../../constants'

export function allThingsToDo(state ={}, action){
    switch(action.type){
        case thingsToDoConstants.GET_ALL_THINGS_TO_DO_REQUEST:
            return {
                gettingAllThingsToDo: true,
                thingsToDoId: action.thingsToDoId
            }
        case thingsToDoConstants.GET_ALL_THINGS_TO_DO_SUCCESS:
            return {
                gotAllThingsToDo: true,
                allThingsToDo: action.allThingsToDo
            }
        case thingsToDoConstants.GET_ALL_THINGS_TO_DO_FAILURE:
            return {}
        default:
            return state
    }
}