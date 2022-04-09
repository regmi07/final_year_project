import { reviewsConstant } from "../../constants";

export function reviewsByHotel(state = {}, action){
    switch(action.type){
        case reviewsConstant.REVIEW_BY_HOTEL_REQUEST:
            return {
                gettingReviewsByHotel: true,
                hotelId: action.hotelId
            }
        case reviewsConstant.REVIEW_BY_HOTEL_SUCCESS:
            return {
                getReviewByHotel: true,
                reviewByHotel: action.reviewByHotel
            }
        case reviewsConstant.REVIEW_BY_HOTEL_FAILURE:
            return {}
        default:
            return state
    }
}