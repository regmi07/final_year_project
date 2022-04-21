import {authService} from '../../services/auth/auth.service'
import {userService} from '../../services/user/user.services'
import {messageActions} from '../action'
import { authConstant, messageConstants } from '../constants'

// import {useNavigate} from 'react-router-dom'

export const userActions = {
    login,
    logout,
    register,
    updateProfilePicture,
    updateUserDetails,
    changePassword
}

function login (username, password, role) {
    // const navigate = useNavigate()
    console.log('login action')
    return dispatch => {
        dispatch(request({username}))

        authService.login(username, password, role)
            .then(
                user => {
                    dispatch(success(user))
                    // navigate('/')
                },
                error => {
                    const errormessage =  error.response?.data?.message
                    console.log(errormessage)
                    dispatch(failure(errormessage))
                    dispatch(messageActions.error(errormessage))
                }
            )
    }

    function request(user) {
        console.log('request')
        return {
            type: authConstant.LOGIN_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: authConstant.LOGIN_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: authConstant.LOGIN_FAILURE,
            error
        }
    }
}

function logout(){
    authService.logout()
    return {type: authConstant.LOGOUT  }
}

function register(user){
    return dispatch => {
        dispatch(request(user));

        authService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    // history.push('/login');
                    dispatch(messageActions.success('Registration successful'));
                },
                error => {
                    const errormessage =  error.response?.data?.message
                    dispatch(failure(errormessage));
                    dispatch(messageActions.error(errormessage));
                }
            );
    };

    function request(user) {
        return {
            type: authConstant.REGISTER_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: authConstant.REGISTER_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: authConstant.REGISTER_FAILURE,
            error
        }
    }
}

function updateProfilePicture(user, profilePicture){
    console.log('hello hello')
    return dispatch => {
        dispatch(request(user))

        userService.updateProfilePicture(user,profilePicture)
        .then(newProfilePicture => {
            dispatch(success(user,newProfilePicture))
        }, error => {
            const errormessage =  error.response?.data?.message
            dispatch(failure(errormessage));
            dispatch(messageActions.error(errormessage));
        })

    }

    function request(user) {
        return {
            type: authConstant.UPDATE_PROFILE_PICTURE_REQUEST,
            user
        }
    }

    function success(user, profilePicture) {
        return {
            type: authConstant.UPDATE_PROFILE_PICTURE_SUCCESS,
            newProfilePicture: {user, profilePicture}
        }
    }

    function failure(error) {
        return {
            type: authConstant.UPDATE_PROFILE_PICTURE_FAILURE,
            error
        }
    }      
}

function updateUserDetails(user, userDetails){
    return dispatch => {
        dispatch(request(user))

        userService.updateUserDetails(user,userDetails)
        .then(newUserDetails => {
                dispatch(success(newUserDetails))
        }, error => {
            const errormessage =  error.response?.data?.message
            dispatch(failure(errormessage));
            dispatch(messageActions.error(errormessage));
        })

    }

    function request(userDetails) {
        return {
            type: authConstant.UPDATE_USER_DETAILS_REQUEST,
            userDetails
        }
    }

    function success(newUserDetails) {
        return {
            type: authConstant.UPDATE_USER_DETAILS_SUCCESS,
            newUserDetails
        }
    }

    function failure(error) {
        return {
            type: authConstant.UPDATE_USER_DETAILS_FAILURE,
            error
        }
    }      
}

function changePassword(currentpassword,newpassword){
    return dispatch => {
        dispatch(request())

        userService.updatePassword(currentpassword,newpassword)
        .then(() => {
            dispatch(success())
        }, error => {
            const errormessage =  error.response?.data?.message
            dispatch(failure(errormessage));
            dispatch(messageActions.error(errormessage));
        })
    }
    function request() {
        return {
            type: authConstant.CHANGE_PASSWORD_REQUEST,
        }
    }

    function success(message) {
        return {
            type: authConstant.CHANGE_PASSWORD_SUCCESS,
            message
        }
    }

    function failure(error) {
        return {
            type: authConstant.CHANGE_PASSWORD_FAILURE,
            error
        }
    }      
}