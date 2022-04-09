import {authService} from '../../services/auth/auth.service'
import {messageActions} from '../action'
import { authConstant, messageConstants } from '../constants'

// import {useNavigate} from 'react-router-dom'

export const userActions = {
    login,
    logout,
    register,
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


