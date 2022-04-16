import axios from '../../../helpers/axios'
import authHeader from '../../auth/auth.header'

export const bookingService = {
    makePayment,
    bookRoom
}

function makePayment(payment_type, paid_amount, total_amount){
    try{
        return axios.post(`/payment`, {payment_type, paid_amount, total_amount}, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(paymentInfo => paymentInfo)
    }catch(err){
        console.log('error payment cannot proceed')
    }
}

function bookRoom(total_traveler,user_id,payment_id,check_in_date,check_out_date, room_id, name, email, hotel){
    try{
        return axios.post('/booking', {
            total_traveler, user_id, payment_id, check_in_date, check_out_date, room_id, name, email, hotel
        }, {headers: authHeader()})
        .then(handleResponse, handleError)
        .then(bookingInfo => bookingInfo)
    }catch(err){
        console.log('error occured while booking')
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