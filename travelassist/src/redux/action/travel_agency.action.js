import {travelAgencyServices} from '../../services/travel_agency/travel_agency.services'
import {messageActions} from '../action'
import {travelAgencyConstant} from '../constants'

export const travelAgencyActions = {
    createTravelAgency,
    getTravelAgencyById,
    updateTravelAgency
}

function createTravelAgency(travelAgency){
    return dispatch => {
        dispatch(request(travelAgency))

        travelAgencyServices.createTravelAgency(travelAgency)
        .then(
            createdTravelAgency => {
                dispatch(success(createdTravelAgency))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(travelAgency){
        return {
            type: travelAgencyConstant.CREATE_TRAVEL_AGENCY_REQUEST,
            travelAgency
        }
    }

    function success(createdTravelAgency){
        return {
            type: travelAgencyConstant.CREATE_TRAVEL_AGENCY_SUCCESS,
            createdTravelAgency
        }
    }

    function failure(error){
        return {
            type: travelAgencyConstant.CREATE_TRAVEL_AGENCY_FAILURE,
            error
        }
    }
}

function getTravelAgencyById(agency_id){
    return dispatch => {
        dispatch(request(agency_id))

        travelAgencyServices.getTravelAgencyById(agency_id)
        .then(
            travelAgencyById => {
                dispatch(success(travelAgencyById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(agency_id){
        return {
            type: travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_REQUEST,
            agency_id
        }
    }

    function success(travelAgencyById){
        return {
            type: travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_SUCCESS,
            travelAgencyById
        }
    }

    function failure(error){
        return {
            type: travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_FAILURE,
            error
        }
    }
}

function updateTravelAgency(agency_id,name,email,location,description,phone){
    return dispatch => {
        dispatch(request({agency_id,name,email,location,description,phone}))

        travelAgencyServices.updateTravelAgency(agency_id,name,email,location,description,phone)
        .then(
            updatedTravelAgency => {
                dispatch(success(updatedTravelAgency))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(toBeUpdatedTravelAgency){
        return {
            type: travelAgencyConstant.UPDATE_TRAVEL_AGENCY_REQUEST,
            toBeUpdatedTravelAgency
        }
    }

    function success(updatedTravelAgency){
        return {
            type: travelAgencyConstant.UPDATE_TRAVEL_AGENCY_SUCCESS,
            updatedTravelAgency
        }
    }

    function failure(error){
        return {
            type: travelAgencyConstant.UPDATE_TRAVEL_AGENCY_FAILURE,
            error
        }
    }
}