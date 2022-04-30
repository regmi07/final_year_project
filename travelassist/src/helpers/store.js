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
import {addItineraryToTravelPackage} from '../redux/reducer/travel_package/itinerary/add_itinerary_to_travel_package.reducer'
import {getItineraryByTravelPackage} from '../redux/reducer/travel_package/itinerary/get_itinerary_by_travel_package.reducer'
import {updateItinerary} from '../redux/reducer/travel_package/itinerary/update_itinerary.reducer'
import {deleteItineraryById} from '../redux/reducer/travel_package/itinerary/delete_itinerary.reducer'
import {changePassword} from '../redux/reducer/changepassword.reducer'
import {reviewByUser} from '../redux/reducer/reviews/reviewByUser.reducer'
import {weatherInformation} from '../redux/reducer/weather.reducer'
import {planToVisitListByUser} from '../redux/reducer/visit_list/planToVisitListByUser.reducer'
import {visitedListByUser} from '../redux/reducer/visit_list/visitedListByUser.reducer'
import {visitedListByDestination} from '../redux/reducer/visit_list/visited_list_by_destination.reducer'
import {visitedListById} from '../redux/reducer/visit_list/visited_list_by_id.reducer'
import {getDestinationById} from '../redux/reducer/destinations/getDestinationById.reducer'
import {getAllDestination} from '../redux/reducer/destinations/getAllDestination.reducer'
import {hotelBookingByUser} from '../redux/reducer/hotels/booking/bookingbyuser.reducer'

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
    updateDateAndDest: updateDateAndDest,
    addItineraryToTravelPackage: addItineraryToTravelPackage,
    getItineraryByTravelPackage: getItineraryByTravelPackage,
    updateItinerary: updateItinerary,
    deleteItineraryById: deleteItineraryById,
    changePassword: changePassword,
    reviewByUser: reviewByUser,
    weatherInformation: weatherInformation,
    planToVisitListByUser: planToVisitListByUser,
    visitedListByUser: visitedListByUser,
    visitedListByDestination: visitedListByDestination,
    visitedListById: visitedListById,
    getDestinationById: getDestinationById,
    getAllDestination: getAllDestination,
    hotelBookingByUser: hotelBookingByUser
  },
});