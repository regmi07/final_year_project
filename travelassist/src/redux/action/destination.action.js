import {destinationService} from "../../services/destinations/destination.service"
import {messageActions} from "../action"
import {destinationConstants} from "../constants"

export const destinationActions = {
    getAllDestination,
    getDestinationById
}

function getAllDestination(){
    return dispatch => {
        dispatch(request())

        destinationService.getTopDestination()
        .then(
            allDestinations => {
                dispatch(success(allDestinations))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(){
        return {
            type: destinationConstants.GET_ALL_DESTINATION_REQUEST,
        }
    }

    function success(allDestinations){
        return {
            type: destinationConstants.GET_ALL_DESTINATION_SUCCESS,
            allDestinations
        }
    }

    function failure(error){
        return {
            type: destinationConstants.GET_ALL_DESTINATION_FAILURE,
            error
        }
    }
}

function getDestinationById(destination){
    return dispatch => {
        dispatch(request())

        destinationService.getDestinationById(destination)
        .then(
            destinationById => {
                dispatch(success(destinationById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(){
        return {
            type: destinationConstants.GET_DESTINATION_BY_ID_REQUEST,
        }
    }

    function success(destinationById){
        return {
            type: destinationConstants.GET_DESTINATION_BY_ID_SUCCESS,
            destinationById
        }
    }

    function failure(error){
        return {
            type: destinationConstants.GET_DESTINATION_BY_ID_FAILURE,
            error
        }
    }
}