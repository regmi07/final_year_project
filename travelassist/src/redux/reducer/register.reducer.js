import {authConstant} from '../constants'

export function registration(state = {}, action) {
    switch (action.type) {
        case authConstant.REGISTER_REQUEST:
            return { regestring: true }
        case authConstant.REGISTER_SUCCESS:
            return { registered: true }
        case authConstant.REGISTER_FAILURE:
            return {}
        default:
            return state
    }
}