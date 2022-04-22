import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const visitListServices = {
    createVisitList,
    getPlanToVisitListByUser,
    getVisitedListByUser,
    getVisitedListByDestination,
    getVisitedListById,
    removeFromVisitListById
}

function createVisitList(visitList){
    try{
        return axios.post('/visitlist',visitList, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(visitedList => visitedList)
    }catch(err){
        console.log('error while creating visit list')
    }
}

function getPlanToVisitListByUser(user){
    try{
        return axios.get(`/visitlist/plantovisitlist/user/${user}`, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(planToVisitList => planToVisitList)
    }catch(err){
        console.log('error while getting plan to visit list by user: ', err)
    }
}

function getVisitedListByUser(user){
    try{
        return axios.get(`/visitlist/visitedlist/user/${user}`, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(visitedListByUser => visitedListByUser)
    }catch(err){
        console.log('error while getting visited list by user')
    }
}

function getVisitedListByDestination(destination){
    try{
        return axios.get(`/visitlist/visitedlist/destination/${destination}`)
        .then(handleResponse)
        .then(visitedListByDestination => visitedListByDestination)
    }catch(err){
        console.log('error while getting visited list by destination')
    }
}

function getVisitedListById(user,destination){
    try{
        return axios.get(`/visitlist/byid?user=${user}&destination=${destination}`)
        .then(handleResponse)
        .then(visitedListById => visitedListById)
    }catch(err){
        console.log('error while getting visited list by id')
    }
}

function removeFromVisitListById(destination){
    try{
        return axios.delete(`/visitlist/delete/${destination}`, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(message => message)
    }catch(err){
        console.log('error while deleting visit list by id')
    }
}

function handleResponse(response) {
    console.log('handle response')
    console.log('res', response)
    if(response.statusText !== "OK"){
        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }
    console.log('response',response.data)
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