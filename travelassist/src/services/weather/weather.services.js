import axios from 'axios'

export const weatherServices = {
    getWeatherInformation
}

function getWeatherInformation(lon,lat){
    try{
        return axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(handleResponse)
        .then(weatherInfo => weatherInfo)
    }catch(err){
        console.log('error while getting weather information: ', err)
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
