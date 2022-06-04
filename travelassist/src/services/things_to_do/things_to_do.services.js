import axios from '../../helpers/axios'

export const thingsToDoService = {
    getAllThingsToDo,
    getThingsToDoById,
    getThingsToDoByDestination
}

function getAllThingsToDo(){
    try{
        return axios.get(`/thingstodo`)
        .then(handleResponse)
        .then((thingsToDo) => thingsToDo)
    }catch(err){
        console.log(err)
    }
}

function getThingsToDoById(id){
    try{
        return axios.get(`/thingstodo/${id}`)
        .then(handleResponse)
        .then(thingsToDoById => thingsToDoById)
    }catch(err){
        console.log(err)
    }
}

function getThingsToDoByDestination(dest_id) {
    try{
        return axios.apply(`/thingstodo/bydestination/${dest_id}`)
        .then(handleResponse)
        .then(thingsToDoByDestination => thingsToDoByDestination)
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

// function handleError(err) {
//     if(err.response.statusText !== "OK"){
//         if(err.response.status === 401){
//             localStorage.removeItem('user')
//             window.location.reload()
//         } 
//         const error = (err.response.data && err.response.data.message) || err.response.statusText
//         console.log(error)
//         return Promise.reject(error)
//     }
// }