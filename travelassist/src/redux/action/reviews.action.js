import {reviewsServices} from '../../services/reviews/reviews.services'
import {messageActions} from '../action'
import { reviewsConstant } from '../constants'

export const reviewActions = {
    postReview,
    getReviewByHotel
}

function postReview(userId,owner,rating,review_title,review,date_of_stay){
    return dispatch => {
        dispatch(request({userId, owner}))

        reviewsServices.addReview(userId,owner,rating,review_title,review,date_of_stay)
        .then(
            postedReview => {
                dispatch(success(postedReview))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    function request(postDetails){
        return {
            type: reviewsConstant.POST_REVIEW_REQUEST,
            postDetails
        }
    }

    function success(postedReview){
        return {
            type: reviewsConstant.POST_REVIEW_SUCCESS,
            postedReview
        }
    }

    function failure(error){
        return {
            type: reviewsConstant.POST_REVIEW_FAILURE,
            error
        }
    }
}

function getReviewByHotel(hotelId){
    return dispatch => {
        dispatch(request({hotelId}))

        reviewsServices.getReviewByHotel(hotelId)
        .then(
            reviewByHotel => {
                dispatch(success(reviewByHotel))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }
    function request(hotelId){
        return {
            type: reviewsConstant.REVIEW_BY_HOTEL_REQUEST,
            hotelId
        }
    }

    function success(reviewByHotel){
        return {
            type: reviewsConstant.REVIEW_BY_HOTEL_SUCCESS,
            reviewByHotel
        }
    }

    function failure(error){
        return {
            type: reviewsConstant.REVIEW_BY_HOTEL_FAILURE,
            error
        }
    }
}