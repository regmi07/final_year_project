import { reviewsConstant } from "../../constants";

export function postNewReview(state = {}, action){
    switch(action.type){
        case reviewsConstant.POST_REVIEW_REQUEST:
            return {
                postingReview: true,
                hotelId: action.postDetails.owner,
                userId: action.postDetails.userId
            }
        case reviewsConstant.POST_REVIEW_SUCCESS:
            return {
                postSuccess: true,
                postedReview: action.postedReview
            }
        case reviewsConstant.POST_REVIEW_FAILURE:
            return {}
        default:
            return state
    }
}