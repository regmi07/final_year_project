import {weatherServices} from '../../services/weather/weather.services'
import {messageActions} from '../action'
import {weatherConstant} from '../constants'

export const weatherActions = {
    getWeatherByDestination
}

function getWeatherByDestination(lon,lat){
    return dispatch => {
        dispatch(request(lon,lat))

        weatherServices.getWeatherInformation(lon,lat)
        .then(
            weatherInfo => {
                dispatch(success(weatherInfo, lon, lat))
            },
            error => {
                const errormessage = error.response?.data?.message
                console.log(errormessage);
                dispatch(failure(errormessage));
                dispatch(messageActions.error(errormessage));
            }
        )
    }

    function request(lon, lat){
        return {
            type: weatherConstant.GET_WEATHER_REQUEST,
            coordinate: {lon, lat}
        }
    }

    function success(weatherInfo, lon, lat){
        return {
            type: weatherConstant.GET_WEATHER_SUCCESS,
            weatherInfo,
            coordinates: {lon,lat}
        }
    }

    function failure(error){
        return {
            type: weatherConstant.GET_WEATHER_FAILURE,
            error
        }
    }
}