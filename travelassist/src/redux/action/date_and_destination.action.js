import {updateDateAndDestinationConstants} from '../constants'

export const updateDateAndDestinationActions = {
    updateFrom,
    updateTo,
    updateDeparture,
    updateReturn,
    updateTraveler
}

function updateFrom(from){
    console.log('update from called')
    return {type: updateDateAndDestinationConstants.UPDATE_FROM, from}
}

function updateTo(to){
    return {type: updateDateAndDestinationConstants.UPDATE_TO, to}
}

function updateDeparture(departure){
    return {type: updateDateAndDestinationConstants.UPDATE_DEPARTURE, start_date: departure}
}

function updateReturn(return_date){
    return {type: updateDateAndDestinationConstants.UPDATE_RETURN, end_date: return_date}
}

function updateTraveler(traveler){
    return {type: updateDateAndDestinationConstants.UPDATE_TRAVELLER, total_traveler: traveler}
}