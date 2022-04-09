import {messageConstants} from '../constants'

export function message(state = {}, action){
    switch(action.type){
        case messageConstants.SUCCESS:
            return {
                type: 'message-success',
                message: action.message
            }
        case messageConstants.ERROR:
            return {
                type: 'message-error',
                message: action.message
            }
        case messageConstants.CLEAR:
            return {}
        default:
            return state
    }
}