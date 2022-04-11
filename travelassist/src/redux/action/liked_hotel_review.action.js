import {likedReviewServices} from '../../services/reviews/liked_review.services'
import {messageActions} from '../action'
import {likedReviewConstant} from '../constants'

export const likedReviewActions = {
    addLikeToReview,
    deleteLikeFromReview
}

function addLikeToReview(liked_by,review_for,review_by){
    return dispatch => {
        dispatch(request({liked_by, review_for, review_by}))

        likedReviewServices.addLikeToReview(liked_by, review_for, review_by)
        .then(
            likedReview => {
                dispatch(success(likedReview))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(error.response);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(like_info){
        return {
            type: likedReviewConstant.LIKE_HOTEL_REVIEW_REQUEST,
            like_info
        }
    }

    function success(likedReview){
        return {
            type: likedReviewConstant.LIKE_HOTEL_REVIEW_SUCCESS,
            likedReview
        }
    }

    function failure(error){
        return {
            type: likedReviewConstant.LIKE_HOTEL_REVIEW_FAILURE,
            error
        }
    }
}

function deleteLikeFromReview(liked_by, review_for, review_by){
    return dispatch => {
        dispatch(request({liked_by, review_for, review_by}))

        likedReviewServices.deleteLikeToReview(liked_by, review_for, review_by)
        .then(
            likedReview => {
                dispatch(success(likedReview))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(like_info){
        return {
            type: likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_REQUEST,
            like_info
        }
    }

    function success(likedReview){
        return {
            type: likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_SUCCESS,
            likedReview
        }
    }

    function failure(error){
        return {
            type: likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_FAILURE,
            error
        }
    }
}