import {travelPackageConstant} from '../../constants'

export function getByTravelAgency(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_BY_TRAVEL_AGENCY_REQUEST:
            return {
                gettingTravelPackageByTravelAgency: true,
                agency_id: action.agency_id
            }
        case travelPackageConstant.GET_BY_TRAVEL_AGENCY_SUCCESS:
            return {
                travelPackageByTravelAgency: action.travelPackageByTravelAgency
            }
        case travelPackageConstant.GET_BY_TRAVEL_AGENCY_FAILURE:
            return {}
        default: 
            return state
    }
}