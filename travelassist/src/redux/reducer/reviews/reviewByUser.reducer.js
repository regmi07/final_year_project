import {reviewsConstant} from '../../constants'

export function reviewByUser(state={}, action){
    switch(action.type){
        case reviewsConstant.REVIEW_BY_USER_REQUEST:
            return {
                gettingReviewsByUser: true,
                userId: action.userId
            }
        case reviewsConstant.REVIEW_BY_USER_SUCCESS:
            return {
                getReviewByUser: true,
                reviewByUser: action.reviewByUser
            }
        case reviewsConstant.REVIEW_BY_User_FAILURE:
            return {}
        case reviewsConstant.DELETE_REVIEW_REQUEST:
            return {...state, deletingReview: true}
        case reviewsConstant.DELETE_REVIEW_SUCCESS:
            const filteredReview = state.reviewByUser.filter((review) => {
                return review.hotel !== action.info.hotel
            })
            return {
                deletedReview: true,
                reviewByUser: filteredReview
            }
        case reviewsConstant.DELETE_REVIEW_FAILURE:
            return {}
        default:
            return state
    }
}
