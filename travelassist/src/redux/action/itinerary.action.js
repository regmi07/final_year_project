import {travelPackageServices} from '../../services/travel_package/travel_package.services'
import {messageActions} from '../action'
import { travelPackageConstant } from '../constants'

export const itineraryActions = {
    addItineraryToTravelPackage,
    getItineraryByTravelPackage,
    updateItinerary,
    deleteItineraryById
}

function addItineraryToTravelPackage(itinerary) {
    return dispatch => {
        dispatch(request(itinerary))

        travelPackageServices.addItineraryToTravelPackage(itinerary)
        .then(
            createdItinerary => {
                dispatch(success(createdItinerary))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(itinerary){
        return {
            type: travelPackageConstant.ADD_ITINERARY_REQUEST,
            itinerary
        }
    }

    function success(createdItinerary){
        return {
            type: travelPackageConstant.ADD_ITINERARY_SUCCESS,
            createdItinerary
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.ADD_ITINERARY_FAILURE,
            error
        }
    }
}

function getItineraryByTravelPackage(travel_package_id){
    return dispatch => {
        dispatch(request(travel_package_id))

        travelPackageServices.getItineraryByTravelPackage(travel_package_id)
        .then(
            itineraryByTravelPackage => {
                dispatch(success(itineraryByTravelPackage))
            }, error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(travel_package_id){
        return {
            type: travelPackageConstant.GET_ITINERARY_REQUEST,
            travel_package_id
        }
    }

    function success(itineraryByTravelPackage){
        return {
            type: travelPackageConstant.GET_ITINERARY_SUCCESS,
            itineraryByTravelPackage
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_ITINERARY_FAILURE,
            error
        }
    }
}

function updateItinerary(itinerary, itinerary_id){
    return dispatch => {
        dispatch(request(itinerary))

        travelPackageServices.updateItinerary(itinerary, itinerary_id)
        .then(
            updatedItinerary => {
                dispatch(success(updatedItinerary))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(itinerary){
        return {
            type: travelPackageConstant.UPDATE_ITINERARY_REQUEST,
            itinerary
        }
    }

    function success(updatedItinerary){
        return {
            type: travelPackageConstant.UPDATE_ITINERARY_SUCCESS,
            updatedItinerary
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.UPDATE_ITINERARY_FAILURE,
            error
        }
    }
}

function deleteItineraryById(itinerary_id){
    return dispatch => {
        dispatch(request(itinerary_id))

        travelPackageServices.deleteItineraryById(itinerary_id)
        .then(
            deletedItineraryId => {
                dispatch(success(deletedItineraryId))
            },error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
   
    function request(itinerary_id){
        return {
            type: travelPackageConstant.DELETE_ITINERARY_REQUEST,
            itinerary_id
        }
    }

    function success(deletedItineraryId){
        return {
            type: travelPackageConstant.DELETE_ITINERARY_SUCCESS,
            deletedItineraryId
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.DELETE_ITINERARY_FAILURE,
            error
        }
    }
}