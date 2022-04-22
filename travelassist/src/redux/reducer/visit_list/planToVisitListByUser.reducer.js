import {visitListConstants} from '../../constants'

export function planToVisitListByUser(state = {}, action){
    switch(action.type){
        case visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_REQUEST:
            return {
                gettingPlanToVisitListByUser: true,
                user: action.user
            }
        case visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_SUCCESS:
            return {
                gotPlanToVisitListByUser: true,
                planToVisitListByUser: action.planToVisitListByUser
            }
        case visitListConstants.CREATE_PLAN_TO_VISIT_LIST_REQUEST:
            return {
                creatingPlanToVisitList: true,
                planToVisitListByUser: state.planToVisitListByUser,
            }
        case visitListConstants.CREATE_PLAN_TO_VISIT_LIST_SUCCESS:
            return {
                createdPlanToVisitList: true,
                planToVisitListByUser: [...state.planToVisitListByUser,action.createdPlanToVisitList]
            }
        case visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_REQUEST:
            return {
                deletingPlanToVisitList: true,
                planToVisitListByUser: state.planToVisitListByUser,
            }
        case visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_SUCCESS:
            const filteredPlanToVisitList = state.planToVisitListByUser.filter((list) => {
                return list.destination !== action.info.destination
            })
            return {
                deletedFromPlanToVisit: true,
                planToVisitListByUser: filteredPlanToVisitList
            }
        case visitListConstants.CREATE_PLAN_TO_VISIT_LIST_FAILURE:
        case visitListConstants.GET_PLAN_TO_VISIT_LIST_BY_USER_FAILURE:
        case visitListConstants.DELETE_PLAN_TO_VISIT_LIST_BY_ID_FAILURE:
            return {}

        default:
            return state
    }
}