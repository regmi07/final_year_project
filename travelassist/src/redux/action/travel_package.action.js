import {travelPackageServices} from '../../services/travel_package/travel_package.services'
import {messageActions} from '../action'
import { travelPackageConstant } from '../constants'

import dayjs from 'dayjs'

const startDate = dayjs().format('YYYY-MM-DD')

export const travelPackageActions = {
    createTravelPackage,
    getTravelPackageById,
    getAvailableTravelPackageForBooking,
    getByTravelAgency,
    bookTravelPackage,
    getTravelPackageBookingById,
    getTravelPackageBookingByUser
}

function createTravelPackage(travelPackage){
    return dispatch => {
        dispatch(request(travelPackage))

        travelPackageServices.createTravelPackage(travelPackage)
        .then(
            createdTravelPackage => {
                dispatch(success(createdTravelPackage))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(travelPackage){
        return {
            type: travelPackageConstant.CREATE_TRAVEL_PACKAGE_REQUEST,
            travelPackage
        }
    }

    function success(createdTravelPackage){
        return {
            type: travelPackageConstant.CREATE_TRAVEL_PACKAGE_SUCCESS,
            createdTravelPackage
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.CREATE_TRAVEL_PACKAGE_FAILURE,
            error
        }
    }
}

function getTravelPackageById(travelPackage_id){
    return dispatch => {
        dispatch(request(travelPackage_id))

        travelPackageServices.getTravelPackageById(travelPackage_id)
        .then(
            travelPackageById => {
                dispatch(success(travelPackageById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(travelPackage_id){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_REQUEST,
            travelPackage_id
        }
    }

    function success(travelPackageById){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_SUCCESS,
            travelPackageById
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_FAILURE,
            error
        }
    }
}

function getAvailableTravelPackageForBooking({start_date = startDate, end_date = '', total_traveler = 0,from_dest = '', to_dest = '',travel_agency = ''}){
    return dispatch => {
        dispatch(request({start_date, end_date, total_traveler,from_dest,to_dest,travel_agency}))

        travelPackageServices.getAvailableTravelPackageForBooking(start_date, end_date, total_traveler,from_dest,to_dest,travel_agency)
        .then(
            availableTravelPackage => {
                dispatch(success(availableTravelPackage))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(selectedDate){
        return {
            type: travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_REQUEST,
            selectedDate
        }
    }

    function success(availableTravelPackage){
        return {
            type: travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_SUCCESS,
            availableTravelPackage
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_AVAILABLE_TRAVEL_PACKAGE_FAILURE,
            error
        }
    }
}

function getByTravelAgency(agency_id){
    return dispatch => {
        dispatch(request(agency_id))

        travelPackageServices.getByTravelAgency(agency_id)
        .then(
            travelPackageByTravelAgency => {
                dispatch(success(travelPackageByTravelAgency))
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
            type: travelPackageConstant.GET_BY_TRAVEL_AGENCY_REQUEST,
            agency_id
        }
    }

    function success(travelPackageByTravelAgency){
        return {
            type: travelPackageConstant.GET_BY_TRAVEL_AGENCY_SUCCESS,
            travelPackageByTravelAgency
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_BY_TRAVEL_AGENCY_FAILURE,
            error
        }
    }
}

function bookTravelPackage(travelPackageBookingInfo){
    return dispatch => {
        dispatch(request(travelPackageBookingInfo))

        travelPackageServices.bookTravelPackage(travelPackageBookingInfo)
        .then(
            travelPackageBookingInfo => {
                dispatch(success(travelPackageBookingInfo))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(travelPackageBookingInfo){
        return {
            type: travelPackageConstant.BOOK_TRAVEL_PACKAGE_REQUEST,
            travelPackageBookingInfo
        }
    }

    function success(travelPackageBookingInfo){
        return {
            type: travelPackageConstant.BOOK_TRAVEL_PACKAGE_SUCCESS,
            travelPackageBookingInfo
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.BOOK_TRAVEL_PACKAGE_FAILURE,
            error
        }
    }
}

function getTravelPackageBookingById(package_booking_id){
    return dispatch => {
        dispatch(request(package_booking_id))

        travelPackageServices.getTravelPackageBookingById(package_booking_id)
        .then(
            travelPackageBookingById => {
                dispatch(success(travelPackageBookingById))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(package_booking_id){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_REQUEST,
            package_booking_id
        }
    }

    function success(travelPackageBookingById){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_SUCCESS,
            travelPackageBookingById
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_ID_FAILURE,
            error
        }
    }
}

function getTravelPackageBookingByUser(user_id){
    return dispatch => {
        dispatch(request(user_id))

        travelPackageServices.getTravelPackageBookingByUser(user_id)
        .then(
            travelPackageBookingByUser => {
                dispatch(success(travelPackageBookingByUser))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(user_id){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_REQUEST,
            user_id
        }
    }

    function success(travelPackageBookingByUser){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_SUCCESS,
            travelPackageBookingByUser
        }
    }

    function failure(error){
        return {
            type: travelPackageConstant.GET_TRAVEL_PACKAGE_BOOKING_BY_USER_FAILURE,
            error
        }
    }
}