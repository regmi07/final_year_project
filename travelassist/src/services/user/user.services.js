import axios from "../../helpers/axios";
import authHeader from '../auth/auth.header'

export const userService = {
    updateProfilePicture,
    updatePassword,
    updateUserDetails
}

function updatePassword(currentpassword,newpassword) {
    try{
        return axios.post(`/users/password`, {currentpassword, newpassword}, {headers: authHeader()})
        .then(handleResponse)
        .then(updatedPasswordMessage => updatedPasswordMessage) 
    }catch(err){
        console.log(err)
    }
}

function updateProfilePicture(id,profilePicture){
    try{
        return axios.put(`/users/updateprofilepicture/${id}`, profilePicture)
        .then(handleResponse)
        .then(profilePicture => profilePicture)
    }catch(err){
        console.log(err)
    }
}

function updateUserDetails(userid, userDetails){
    console.log('update user details called')
    try{
        return axios.put(`/users/${userid}`, userDetails, {headers: authHeader()})
        .then(handleResponse)
        .then(updatedUserDetails => updatedUserDetails)
    }catch(err){
        console.log(err)
    }
}

function handleResponse(response) {
    console.log(response.data)
    if(response.statusText !== "OK"){
        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }

    return response.data
}