import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const reviewsServices = {
    addReview,
    getReviewByHotel,
    getReviewByUser,
    deleteReviewById
}

function addReview(userId,owner,rating,review_title,review,date_of_stay){
    try{
        return axios.post('/reviews', {userId,owner,rating,review_title,review,date_of_stay}, {headers: authHeader()})
        .then(handleResponse)
        .then(postedReview => postedReview)
    }catch(err){
        console.log('error while adding review')
    }
}

function getReviewByHotel(hotelId){
    try{
        return axios.get(`/reviews/hotel/${hotelId}`)
        .then(handleResponse)
        .then((reviewByHotel) => reviewByHotel)
    }catch(err){
        console.log('error getting review by hotel')
    }
}

function getReviewByUser(userId){
    try{
        return axios.get(`/reviews/user/${userId}`)
        .then(handleResponse)
        .then((reviewByUser) => reviewByUser)
    }catch(err){
        console.log('error getting review by user')
    }
}

function deleteReviewById(hotel){
    try{
        return axios.delete(`/reviews/${hotel}`, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(message => message)
    }catch(err){
        console.log('error while deleting review')
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