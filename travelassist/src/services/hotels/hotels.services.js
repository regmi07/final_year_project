import axios from '../../helpers/axios'

export const hotelsService = {
    getHotelsAvailableForBookingByDestination,
    getHotelById
}

function getHotelsAvailableForBookingByDestination(checkindate, checkoutdate, rooms, destination){
    try{
        return axios.get(`/owners/availablehotels?checkindate=${checkindate}&checkoutdate=${checkoutdate}&rooms=${rooms}&destination=${destination}`)
        .then(handleResponse)
        .then((availableHotels) => availableHotels)
    }catch(err){
        console.log(err)
    }
}

function getHotelById(id){
    try{
        return axios.get(`/owners/${id}`)
        .then(handleResponse)
        .then(hotelById => hotelById)
    }catch(err){
        console.log('error gettingHotelById', err)
    }
}

function handleResponse(response) {
    if(response.statusText !== "OK"){
        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }

    return response.data
}

