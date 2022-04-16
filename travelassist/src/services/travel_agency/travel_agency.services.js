import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const travelAgencyServices = {
    createTravelAgency,
    getTravelAgencyById,
    updateTravelAgency,
}

function createTravelAgency(travelAgency){
    try{
        return axios.post('/travelagency', travelAgency)
        .then(handleResponse,handleError)
        .then(createdTravelAgency => createdTravelAgency)
    }catch(err){
        console.log(err)
    }
}

function getTravelAgencyById(agency_id){
    try{
        return axios.get(`/travelagency/${agency_id}`)
        .then(handleResponse)
        .then(travelAgencyById => travelAgencyById)
    }catch(err){
        console.log(err)
    }
}

function updateTravelAgency(agency_id,name,email,location,description,phone){
    try{
        return axios.put(`/travelagency/update/${agency_id}`, {name,email,location,description,phone}, {headers: authHeader()})
        .then(handleResponse,handleError)
        .then(updatedTravelAgency => updatedTravelAgency)
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