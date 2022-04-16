import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const travelPackageServices = {
    createTravelPackage,
    getTravelPackageById,
    getAvailableTravelPackageForBooking,
    getByTravelAgency,
    bookTravelPackage,
    getTravelPackageBookingById,
    getTravelPackageBookingByUser
}

function createTravelPackage(travelPackage){
    try{
        return axios.post('/travelpackage',travelPackage, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(createdTravelPackage => createdTravelPackage)
    }catch(err){
        console.log('error while creating travel package')
    }
}

function getTravelPackageById(id){
    try{
        return axios.get(`/travelpackage/${id}`)
        .then(handleResponse)
        .then(travelPackageById => travelPackageById)
    }catch(err){
        console.log(err)
    }
}

function getAvailableTravelPackageForBooking(start_date, end_date, total_traveler,from_dest,travel_agency){
    try{
        return axios.get(`/travelpackage/avialablepackage?start_date=${start_date}&end_date=${end_date}&total_traveler=${total_traveler}&from_dest=${from_dest}&travel_agency=${travel_agency}`)
        .then(handleResponse)
        .then(availableTravelPackage => availableTravelPackage)
    }catch(err){
        console.log(err)
    }
}

function getByTravelAgency(travel_agency_id){
    try{
        return axios.get(`/travelpackage/travelagency/${travel_agency_id}`)
        .then(handleResponse)
        .then(travelPackageByTravelAgency => travelPackageByTravelAgency)
    }catch(err){
        console.log(err)
    }
}

function bookTravelPackage(travelPackageBookingInfo){
    try{
        return axios.post('/travelpackage/booking', travelPackageBookingInfo, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(createdTravelPackageBooking => createdTravelPackageBooking)
    }catch(err){
        console.log('error while booking travel package')
    }
}

function getTravelPackageBookingById(id){
    try{
        return axios.get(`/travelpackage/booking/${id}`)
        .then(handleResponse)
        .then(travelPackageBookingById => travelPackageBookingById)
    }catch(err){
        console.log(err)
    }
}

function getTravelPackageBookingByUser(user_id){
    try{
        return axios.get(`travelpackage/booking/${user_id}`, {headers: authHeader()})
        .then(handleResponse)
        .then(travelPackageBookingByUser => travelPackageBookingByUser)
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
    console.log('handle error called')
    console.log('res', err.response)
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