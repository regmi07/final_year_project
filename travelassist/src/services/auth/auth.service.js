import axios from '../../helpers/axios'

export const authService = {
    login,
    logout,
    register
}

function login(username, password, role) {
    try{

        return axios.post('auth/login', {username, password, role}, {headers: {
            'Content-Type': 'application/json'
        }})
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user
        })
    }catch(err) {
        console.log(err)
    }
}


function logout() {
    localStorage.removeItem('user')
}

function register(user){
    return axios.post('auth/register', user, {headers: {
        'Content-Type': 'application/json'
    }})
    .then(handleResponse)
}

function handleResponse(response) {
    console.log('res', response)
    if(response.statusText !== "OK"){
        if(response.status === 401){
            logout()
            window.location.reload()
        } 

        const error = (response.data && response.data.message) || response.statusText
        console.log(error)
        return Promise.reject(error)
    }

    return response.data
}