import axios from '../../helpers/axios'

export const hotelsService = {
    getHotelsAvailableForBookingByDestination,
    getHotelById,
    getAvailableRoomByHotel
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

function getAvailableRoomByHotel(checkindate, checkoutdate, rooms, hotel){
    try{
        return axios.get(`/rooms/availablerooms?checkindate=${checkindate}&checkoutdate=${checkoutdate}&rooms=${rooms}&hotelId=${hotel}`)
        .then(handleResponse, handleError)
        .then((availableHotels) => availableHotels)
    }catch(err){
        console.log(err)
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


function handleError(err) {
    if(err.response.statusText !== "OK"){
        if(err.response.status === 401){
            localStorage.removeItem('user')
            window.location.reload()
        } 
        const error = (err.response.data && err.response.data.message) || err.response.statusText
        console.log(error)
        return Promise.reject(error)
    }
}

