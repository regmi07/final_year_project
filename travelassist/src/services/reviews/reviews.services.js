import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const reviewsServices = {
    addReview,
    getReviewByHotel,
    getReviewByUser
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

function handleResponse(response) {
    if(response.statusText !== "OK"){
        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }

    return response.data
}