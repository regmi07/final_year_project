import {weatherConstant} from '../constants'

export function weatherInformation(state={}, action){
    switch(action.type){
        case weatherConstant.GET_WEATHER_REQUEST:
            return {
                gettingWeatherInfo: true,
                coordinates: action.coordinates
            }
        case weatherConstant.GET_WEATHER_SUCCESS:
            return {
                coordinates: action.coordinates,
                weatherInfo: action.weatherInfo
            }
        case weatherConstant.GET_WEATHER_FAILURE:
            return {}
        default:
            return state
    }
}