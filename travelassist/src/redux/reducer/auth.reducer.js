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
        case authConstant.UPDATE_PROFILE_PICTURE_SUCCESS:
            const newProfilePicture = action.newProfilePicture.profilePicture.profilePicture
            localStorage.setItem('user', JSON.stringify({...user, profilePicture: newProfilePicture}))
            return {...state, user: {...user,profilePicture: newProfilePicture}}
        case authConstant.UPDATE_USER_DETAILS_REQUEST:
            return {...state, updatingDetails: true}
        case authConstant.UPDATE_USER_DETAILS_SUCCESS:
            console.log(action.newUserDetails)
            localStorage.setItem('user', JSON.stringify({...user, ...action.newUserDetails}))
            return {...state, user: {...user, ...action.newUserDetails}}
        case authConstant.LOGOUT:
            return {}
        default:
            return state
    }
}