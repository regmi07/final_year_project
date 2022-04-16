import {bookingService} from "../../services/hotels/booking/booking.service"
import {messageActions} from '../action'
import { bookingConstant } from "../constants";

export const bookingActions = {
    makePayment, 
    bookRoom
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

function bookRoom(total_traveler,user_id,payment_id,check_in_date,check_out_date, room_id, name, email, hotel){
    return dispatch => {
        dispatch(request({total_traveler,user_id,payment_id,check_in_date,check_out_date, room_id, name, email, hotel}))

        bookingService.bookRoom(total_traveler,user_id,payment_id,check_in_date,check_out_date, room_id, name, email, hotel)
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