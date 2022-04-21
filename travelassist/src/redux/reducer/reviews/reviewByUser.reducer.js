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
        default:
            return state
    }
}