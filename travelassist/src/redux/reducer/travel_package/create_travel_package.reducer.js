import { travelPackageConstant } from "../../constants";

export function createTravelPackage(state = {}, action){
    switch(action.type){
        case travelPackageConstant.CREATE_TRAVEL_PACKAGE_REQUEST:
            return {
                creatingTravelPackage: true,
                travelPackage: action.travelPackage
            }
        case travelPackageConstant.CREATE_TRAVEL_PACKAGE_SUCCESS:
            return {
                createdTravelPackage: action.createdTravelPackage
            }
        case travelPackageConstant.CREATE_TRAVEL_PACKAGE_FAILURE:
            return {}
        default: 
            return state
    }
}
