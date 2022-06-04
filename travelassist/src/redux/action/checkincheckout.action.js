import {updateCheckinConstants} from '../constants/index'

export const updateCheckInAction = {
    updateCheckInDate,
    updateCheckOutDate,
    updateRoomsAndTraveller,
    updateDestination
}

function updateCheckInDate(checkInDate){
    return {type: updateCheckinConstants.UPDATE_CHECKIN_DATE, checkInDate}
}

function updateCheckOutDate(checkOutDate){
    return {type: updateCheckinConstants.UPDATE_CHECKOUT_DATE, checkOutDate}
}

function updateRoomsAndTraveller(rooms_traveller){
    return {type: updateCheckinConstants.UPDATE_ROOMS_TRAVELLER, rooms_traveller}
}

function updateDestination(destination){
    return {type: updateCheckinConstants.UPDATE_DESTINATION, destination}
}
