import axios from '../../helpers/axios'

export const destinationService = {
    getTopDestination,
    getPopularDestination,
    getNearbyDestination,
    getDestinationById
}

function getTopDestination(){
    try{
        return axios.get('/destinations')
        .then(handleResponse)
        .then((topDestinations) => topDestinations)
    }catch(err){
        console.log(err)
    }
}

function getPopularDestination(){
    try{
        return axios.get('/destinations')
        .then(handleResponse)
        .then((popularDestinations) => popularDestinations)
    }catch(err){
        console.log(err)
    }
}

function getNearbyDestination(destinationname){
    try{
        return axios.get(`destinations/${destinationname}`)
        .then(handleResponse)
        .then((nearbyDestinations) => nearbyDestinations)
    }catch(err){
        console.log(err)
    }
}

function getDestinationById(id){
    try{
        return axios.get(`destinations/${id}`)
        .then(handleResponse)
        .then((destination) => destination)
    }catch(err){
        console.log(err)
    }
}

function handleResponse(response) {
    if(response.statusText !== "OK"){
        // if(response.status === 401){
        //     // logout()
        //     window.location.reload()
        // } 
        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }

    return response.data
}