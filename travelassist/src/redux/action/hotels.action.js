import { hotelsService } from "../../services/hotels/hotels.services";
import {messageActions} from '../action'
import { hotelConstant } from "../constants";

export const hotelActions = {
    getAvailableHotelsByDestination,
    getHotelById,
    getAvailableRoomByHotel
}

function getAvailableHotelsByDestination(checkindate, checkoutdate, rooms, destination) {
    return dispatch => {
        dispatch(request({checkindate, checkoutdate, rooms, destination}));

        hotelsService.getHotelsAvailableForBookingByDestination(checkoutdate,checkoutdate,rooms, destination)
        .then(
            availableHotels => {
                dispatch(success(availableHotels));
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    function request(bookingInfo){
        return {
            type: hotelConstant.GET_AVAILABLE_HOTEL_REQUEST,
            bookingInfo
        }
    }

    function success(availableHotels) {
        return {
            type: hotelConstant.GET_AVAILABLE_HOTEL_SUCCESS,
            availableHotels
        }
    }

    function failure(error){
        return {
            type:hotelConstant.GET_AVAILABLE_HOTEL_FAILURE,
            error
        }
    }
}

function getHotelById(id){
    return dispatch => {
        dispatch(request({id}));

        hotelsService.getHotelById(id)
        .then(
            hotelById => {
                dispatch(success(hotelById))
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
            type: hotelConstant.GET_HOTEL_BY_ID_REQUEST,
            hotelId: id
        }
    }

    function success(hotelById){
        return {
            type: hotelConstant.GET_HOTEL_BY_ID_SUCCESS,
            hotelById
        }
    }

    function failure(error){
        return {
            type: hotelConstant.GET_HOTEL_BY_ID_FAILURE,
            error
        }
    }
}

function getAvailableRoomByHotel(checkindate, checkoutdate, rooms, hotel){
    return dispatch => {
        dispatch(request({checkindate, checkoutdate, rooms, hotel}));

        hotelsService.getAvailableRoomByHotel(checkindate, checkoutdate, rooms, hotel)
        .then(
            availableRoomByHotel => {
                dispatch(success(availableRoomByHotel))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    function request(bookingInfo){
        return {
            type: hotelConstant.GET_AVAILABLE_ROOM_REQUEST,
            bookingInfo
        }
    }

    function success(availableRoomByHotel) {
        return {
            type: hotelConstant.GET_AVAILABLE_ROOM_SUCCESS,
            availableRoomByHotel
        }
    }

    function failure(error){
        return {
            type:hotelConstant.GET_AVAILABLE_ROOM_FAILURE,
            error
        }
    }
}