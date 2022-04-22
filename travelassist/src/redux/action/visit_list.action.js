import { visitListServices } from "../../services/visit_list/visit_list.services";
import {messageActions} from "../action"
import {visitListConstants} from '../constants'

export const visitListActions = {
    createVisitedList,
    createPlanToVisitList,
    getPlanToVisitListByUser,
    getVisitedListByUser,
    getVisitedListByDestination,
    getVisitedListById,
    removeFromVisitedListById,
    removePlanToVisitListById
}

function createVisitedList(visitList){
    return dispatch => {
        dispatch(request(visitList))

        visitListServices.createVisitList(visitList)
        .then(
            createdVisitList => {
                dispatch(success(createdVisitList))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(visitList){
        return {
            type: visitListConstants.CREATE_VISITED_LIST_REQUEST,
            visitList
        }
    }

    function success(createdVisitList){
        return {
            type: visitListConstants.CREATE_VISITED_LIST_SUCCESS,
            createdVisitList
        }
    }

    function failure(error){
        return {
            type: visitListConstants.CREATE_VISITED_LIST_FAILURE,
            error
        }
    }
}

function createPlanToVisitList(planToVisitList){
    return dispatch => {
        dispatch(request(planToVisitList))

        visitListServices.createVisitList(planToVisitList)
        .then(
            createdPlanToVisitList => {
                dispatch(success(createdPlanToVisitList))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(planToVisitList){
        return {
            type: visitListConstants.CREATE_PLAN_TO_VISIT_LIST_REQUEST,
            planToVisitList
        }
    }

    function success(createdPlanToVisitList){
        return {
            type: visitListConstants.CREATE_PLAN_TO_VISIT_LIST_SUCCESS,
            createdPlanToVisitList
        }
    }

    function failure(error){
        return {
            type: visitListConstants.CREATE_PLAN_TO_VISIT_LISTp_FAILURE,
            error
        }
    }
}

function getPlanToVisitListByUser(user){
    return dispatch => {
        dispatch(request(user))

        visitListServices.getPlanToVisitListByUser(user)
        .then(
            planToVisitListByUser => {
                dispatch(success(planToVisitListByUser))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(user){
        return {
            type: visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_REQUEST,
            user
        }
    }

    function success(planToVisitListByUser){
        return {
            type: visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_SUCCESS,
            planToVisitListByUser
        }
    }

    function failure(error){
        return {
            type: visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_FAILURE,
            error
        }
    }
}

function getVisitedListByUser(user){
    return dispatch => {
        dispatch(request(user))

        visitListServices.getVisitedListByUser(user)
        .then(
            visitedListByUser => {
                dispatch(success(visitedListByUser))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(user){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_USER_REQUEST,
            user
        }
    }

    function success(visitedListByUser){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_USER_SUCCESS,
            visitedListByUser
        }
    }

    function failure(error){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_USER_FAILURE,
            error
        }
    }
}

function getVisitedListByDestination(destination){
    return dispatch => {
        dispatch(request(destination))

        visitListServices.getVisitedListByDestination(destination)
        .then(
            visitedListByDestination => {
                dispatch(success(visitedListByDestination))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(destination){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_DESTINATION_REQUEST,
            destination
        }
    }

    function success(visitedListByDestination){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_DESTINATION_SUCCESS,
            visitedListByDestination
        }
    }

    function failure(error){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_DESTINATION_FAILURE,
            error
        }
    }
}

function getVisitedListById(user,destination){
    return dispatch => {
        dispatch(request(user,destination))

        visitListServices.getVisitedListById(user,destination)
        .then(
            visitedListById => {
                dispatch(success(visitedListById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(user,destination){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_ID_REQUEST,
            for: {user,destination}
        }
    }

    function success(visitedListById){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_ID_SUCCESS,
            visitedListById
        }
    }

    function failure(error){
        return {
            type: visitListConstants.GET_VISITED_LIST_BY_ID_FAILURE,
            error
        }
    }
}

function removeFromVisitedListById(user,destination){
    return dispatch => {
        dispatch(request(user,destination))

        visitListServices.removeFromVisitListById(destination)
        .then(
            message => {
                dispatch(success(message))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(user,destination){
        return {
            type: visitListConstants.DELETE_VISITED_LIST_BY_ID_REQUEST,
            for: {user,destination}
        }
    }

    function success(message){
        return {
            type: visitListConstants.DELETE_VISITED_LIST_BY_ID_SUCCESS,
            info: {destination,message}
        }
    }

    function failure(error){
        return {
            type: visitListConstants.DELETE_VISITED_LIST_BY_ID_FAILURE,
            error
        }
    }
}

function removePlanToVisitListById(user,destination){
    return dispatch => {
        dispatch(request(user,destination))

        visitListServices.removeFromVisitListById(destination)
        .then(
            message => {
                dispatch(success(message))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    
    function request(user,destination){
        return {
            type: visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_REQUEST,
            for: {user,destination}
        }
    }

    function success(message){
        return {
            type: visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_SUCCESS,
            info: {destination,message}
        }
    }

    function failure(error){
        return {
            type: visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_FAILURE,
            error
        }
    }
}


