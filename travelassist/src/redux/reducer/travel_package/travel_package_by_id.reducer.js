import {travelPackageConstant} from '../../constants'

export function travelPackageById(state = {}, action){
    switch(action.type){
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_REQUEST:
            return {
                gettingTravelPackageById: true,
                travelPackage_id: action.travelPackage_id
            }
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_SUCCESS:
            return {
                travelPackageById: action.travelPackageById
            }
        case travelPackageConstant.GET_TRAVEL_PACKAGE_BY_ID_FAILURE:
            return {}
        default:
            return state
    }
}