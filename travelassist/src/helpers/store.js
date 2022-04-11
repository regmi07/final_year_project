import { configureStore } from '@reduxjs/toolkit';
import {auth} from '../redux/reducer/auth.reducer'
import {registration} from '../redux/reducer/register.reducer'
import {message} from '../redux/reducer/message.reducer'
import {updateCheckIn} from '../redux/reducer/updatecheckin.reducer'
import {available_hotels} from '../redux/reducer/hotels/available_hotels.reducer'
import { hotelById } from '../redux/reducer/hotels/getHotelById.reducer';
import {reviewsByHotel} from '../redux/reducer/reviews/reviewByHotel.reducer'
import {likedReviews} from '../redux/reducer/reviews/addLikeToHotelReview.reducer'
import {postNewReview} from '../redux/reducer/reviews/postReview.reducer'
import {getAvailableRoomByHotel} from '../redux/reducer/hotels/available_rooms_by_hotel.reducer'

export const store = configureStore({
  reducer: {
    message: message,
    signin: auth,
    register: registration,
    updateCheckIn: updateCheckIn,
    availableHotels: available_hotels,
    getHotelById: hotelById,
    getReviewsByHotel: reviewsByHotel,
    likedReviews: likedReviews,
    postNewReview: postNewReview,
    availableRoom: getAvailableRoomByHotel,
  },
});