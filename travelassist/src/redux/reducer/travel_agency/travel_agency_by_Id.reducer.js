import {travelAgencyConstant} from '../../constants'

export function travelAgencyById(state = {}, action){
    switch(action.type){
        case travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_REQUEST:
            return {
                gettingTravelAgencyById: true,
                agency_id: action.agency_id
            }

        case travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_SUCCESS:
            return {
                travelAgencyById: action.travelAgencyById
            }
        case travelAgencyConstant.GET_TRAVEL_AGENCY_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}