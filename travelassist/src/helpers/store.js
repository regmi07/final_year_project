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
import { bookHotel } from '../redux/reducer/hotels/booking/booking.reducer';
import {createTravelAgency} from '../redux/reducer/travel_agency/create_travel_agency.reducer'
import {travelAgencyById} from '../redux/reducer/travel_agency/travel_agency_by_Id.reducer'
import { updateTravelAgency } from '../redux/reducer/travel_agency/update_travel_agency.reducer';
import {createTravelPackage} from '../redux/reducer/travel_package/create_travel_package.reducer'
import {getAvailableTravelPackageForBooking} from '../redux/reducer/travel_package/get_available_travel_package_for_booking.reducer'
import {getByTravelAgency} from '../redux/reducer/travel_package/get_by_travel_agency.reducer'
import {travelPackageById} from '../redux/reducer/travel_package/travel_package_by_id.reducer'
import {bookTravelPackage} from '../redux/reducer/travel_package/travel_package_booking/book_travel_package.reducer'
import {getTravelPackageBookingByBookingId} from '../redux/reducer/travel_package/travel_package_booking/travel_package_booking_by_id.reducer'
import {getTravelPackageByUser} from '../redux/reducer/travel_package/travel_package_booking/travel_package_booking_by_user.reducer'
import {updateDateAndDest} from '../redux/reducer/travel_package/update_date_and_dest.reducer'

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
    bookHotel: bookHotel,
    createTravelAgency: createTravelAgency,
    travelAgencyById: travelAgencyById,
    updateTravelAgency: updateTravelAgency,
    createTravelPackage: createTravelPackage,
    getAvailableTravelPackageForBooking: getAvailableTravelPackageForBooking,
    getByTravelAgency: getByTravelAgency,
    travelPackageById: travelPackageById,
    bookTravelPackage: bookTravelPackage,
    getTravelPackageBookingByBookingId: getTravelPackageBookingByBookingId,
    getTravelPackageByUser: getTravelPackageByUser,
    updateDateAndDest: updateDateAndDest
  },
});