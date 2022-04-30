import {bookingService} from "../../services/hotels/booking/booking.service"
import {messageActions} from '../action'
import { bookingConstant } from "../constants";

export const bookingActions = {
    makePayment, 
    bookRoom,
    getBookingByUser
}

function makePayment(payment_type, paid_amount, total_amount){
    return dispatch => {
        dispatch(request({payment_type, paid_amount, total_amount}))

        bookingService.makePayment(payment_type, paid_amount, total_amount)
        .then(
            paymentDetails => {
                dispatch(success(paymentDetails))
            }, 
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(paymentDetails){
        return {
            type: bookingConstant.PAYMENT_REQUEST,
            paymentDetails
        }
    }

    function success(paymentDetails) {
        return {
            type: bookingConstant.PAYMENT_SUCCESS,
            paymentDetails
        }
    }

    function failure(error){
        return {
            type:bookingConstant.PAYMENT_FAILURE,
            error
        }
    }
}

function bookRoom(payment_type, paid_amount, total_amount,total_traveler,user_id,check_in_date,check_out_date, room_id, name, email, hotel){
    return dispatch => {
        dispatch(request({total_traveler,user_id,check_in_date,check_out_date, room_id, name, email, hotel}))

        bookingService.bookRoom(payment_type, paid_amount, total_amount,total_traveler,user_id,check_in_date,check_out_date, room_id, name, email, hotel)
        .then(
            bookingDetais => {
                dispatch(success(bookingDetais));
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(bookingDetails){
        return {
            type: bookingConstant.BOOKING_REQUEST,
            bookingDetails,
        }
    }

    function success(bookingDetails) {
        return {
            type: bookingConstant.BOOKING_SUCCESS,
            bookingDetails
        }
    }

    function failure(error){
        return {
            type:bookingConstant.BOOKING_FAILURE,
            error
        }
    }
}

function getBookingByUser(user_id){
    return dispatch => {
        dispatch(request(user_id))

        bookingService.getBookingByUser(user_id)
        .then(
            bookingByUser => {
                dispatch(success(bookingByUser))
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
            type: bookingConstant.GET_BOOKING_BY_USER_REQUEST,
            user_id
        }
    }

    function success(bookingByUser){
        return {
            type: bookingConstant.GET_BOOKING_BY_USER_SUCCESS,
            bookingByUser
        }
    }

    function failure(error){
        return {
            type: bookingConstant.GET_BOOKING_BY_USER_FAILURE,
            error
        }
    }
}