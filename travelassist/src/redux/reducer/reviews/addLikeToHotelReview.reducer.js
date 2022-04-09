import {likedReviewConstant} from '../../constants'

export function likedReviews(state = {likeInfo: []}, action){
    switch(action.type){
        case likedReviewConstant.LIKE_HOTEL_REVIEW_REQUEST:
            return {
                ...state,
                addingLikeToReview: true
            }
        case likedReviewConstant.LIKE_HOTEL_REVIEW_SUCCESS:
            return {
                ...state,
                addingLikeToReview: false,
                likeInfo: [...state.likeInfo, action.likedReview]
            }
        case likedReviewConstant.LIKE_HOTEL_REVIEW_FAILURE:
            return {
                ...state,
                failedToLike: true
            }

        case likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_REQUEST:
            return {
                likeInfo: [...state.likeInfo],
                deleteRequest: true
            }
        case likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_SUCCESS:
            return {
                likeInfo: state.likeInfo.filter(like => {
                    return (like.liked_by === action.likedReview.liked_by &&
                            like.review_for === action.likedReview.review_for &&
                            like.review_by === action.likedReview.review_by)
                }),
                deleteSuccess: true
            }
        case likedReviewConstant.DELETE_LIKE_HOTEL_REVIEW_FAILURE:
            return {
                likeInfo: [...state.likeInfo]
            }
        default: 
            return state
    }
}