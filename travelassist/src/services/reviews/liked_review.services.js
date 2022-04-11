import axios from '../../helpers/axios'
import authHeader from '../auth/auth.header'

export const likedReviewServices = {
    addLikeToReview,
    deleteLikeToReview
}

function addLikeToReview(liked_by, review_for, review_by){
    try{
        return axios.post(`/likedreviews`, {liked_by, review_for, review_by}, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(likedReviews => likedReviews)
    }catch(err){
        console.log('error posting like to a review')
    }
}

function deleteLikeToReview(liked_by, review_for, review_by){
    try{
        return axios.delete(`/likedreviews/${liked_by}/${review_for}/${review_by}`,{headers: authHeader()})
        .then(handleResponse)
        .then(message => message)
    }catch(err){
        console.log('error while deleting like from review')
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