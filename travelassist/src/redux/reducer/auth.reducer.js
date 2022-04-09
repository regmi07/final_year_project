import {authConstant} from '../constants'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {loggedIn: true, user} : {}

export function auth(state = initialState, action) {
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case authConstant.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case authConstant.LOGIN_FAILURE:
            return {}
        case authConstant.LOGOUT:
            return {}
        default:
            return state
    }
}