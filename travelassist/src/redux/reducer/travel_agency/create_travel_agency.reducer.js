import {travelAgencyConstant} from '../../constants'

export function createTravelAgency(state = {}, action){
    switch(action.type){
        case travelAgencyConstant.CREATE_TRAVEL_AGENCY_REQUEST:
            return {
                creatingTravelAgency: true,
                travelAgencyInfo: action.travelAgency
            }
        case travelAgencyConstant.CREATE_TRAVEL_AGENCY_SUCCESS:
            return {
                travelAgencyInfo: action.createdTravelAgency
            }
        case travelAgencyConstant.CREATE_TRAVEL_AGENCY_FAILURE:
            return {}
        default:
            return state
    }
}