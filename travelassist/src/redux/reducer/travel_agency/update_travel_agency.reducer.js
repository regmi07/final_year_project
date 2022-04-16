import {travelAgencyConstant} from '../../constants'

export function updateTravelAgency(state = {}, action){
    switch(action.type){
        case travelAgencyConstant.UPDATE_TRAVEL_AGENCY_REQUEST:
            return {
                updatingTravelAgency: true,
                toBeUpdatedTravelAgency: action.toBeUpdatedTravelAgency
            }
        case travelAgencyConstant.UPDATE_TRAVEL_AGENCY_SUCCESS:
            return {
                updatedTravelAgency: action.updatedTravelAgency
            }
        case travelAgencyConstant.UPDATE_TRAVEL_AGENCY_FAILURE:
            return {}
        default:
            return state
    }
}