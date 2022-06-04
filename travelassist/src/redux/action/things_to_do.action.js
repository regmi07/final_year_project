import {thingsToDoService} from "../../services/things_to_do/things_to_do.services";
import {messageActions} from "../action"
import { thingsToDoConstants } from "../constants";

export const thingsToDoActions = {
    getAllThingsToDo,
    getThingsToDoById,
    getThingsToDoByDestination
}

function getAllThingsToDo(){
    return dispatch => {
        dispatch(request());

        thingsToDoService.getAllThingsToDo()
        .then(
            allThingsToDo => {
                dispatch(success(allThingsToDo));
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage)
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(){
        return {
            type: thingsToDoConstants.GET_ALL_THINGS_TO_DO_REQUEST,
        }
    }

    function success(allThingsToDo){
        return {
            type: thingsToDoConstants.GET_ALL_THINGS_TO_DO_SUCCESS,
            allThingsToDo
        }
    }

    function failure(error){
        return {
            type: thingsToDoConstants.GET_ALL_THINGS_TO_DO_FAILURE,
            error
        }
    }
}

function getThingsToDoById(id){
    return dispatch => {
        dispatch(request({id}));

        thingsToDoService.getThingsToDoById(id)
        .then(
            thingsToDoById => {
                dispatch(success(thingsToDoById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(id){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_REQUEST,
            thingsToDoId: id
        }
    }

    function success(thingsToDoById){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_SUCCESS,
            thingsToDoById
        }
    }

    function failure(error){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_ID_FAILURE,
            error
        }
    }
}


function getThingsToDoByDestination(dest_id){
    return dispatch => {
        dispatch(request({dest_id}));

        thingsToDoService.getThingsToDoByDestination(dest_id)
        .then(
            thingsToDoByDestinations => {
                dispatch(success(thingsToDoByDestinations))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(id){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_REQUEST,
            destinationId: id
        }
    }

    function success(thingsToDoByDestinations){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_SUCCESS,
            thingsToDoByDestinations
        }
    }

    function failure(error){
        return {
            type: thingsToDoConstants.GET_THINGS_TO_DO_BY_DESTINATION_FAILURE,
            error
        }
    }
}