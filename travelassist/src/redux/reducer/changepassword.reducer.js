import {authConstant} from '../constants'

export function changePassword(state = {},action){
    switch(action.type){
        case authConstant.CHANGE_PASSWORD_REQUEST:
            return {
                changingPassword: true
            }
        case authConstant.CHANGE_PASSWORD_SUCCESS:
            return {
                changedPassword: true
            }
        case authConstant.CHANGE_PASSWORD_FAILURE:
            return {}
        default:
            return state
    }
}