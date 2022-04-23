import {visitListConstants} from '../../constants'

export function visitedListByUser(state = {}, action){
    switch(action.type){
        case visitListConstants.GET_VISITED_LIST_BY_USER_REQUEST:
            return {
                gettingVisitedListByUser: true,
                user: action.user
            }
        case visitListConstants.GET_VISITED_LIST_BY_USER_SUCCESS:
            return {
                gotVisitedListByUser: true,
                visitedListByUser: action.visitedListByUser
            }
        case visitListConstants.CREATE_VISITED_LIST_REQUEST:
            return {
                creatingVisitedList: true,
                visitedListByUser: state.visitedListByUser,
            }
        case visitListConstants.CREATE_VISITED_LIST_SUCCESS:
            console.log(state.visitedListByUser)
            return {
                createdVisitedList: true,
                visitedListByUser: [...state.visitedListByUser,action.createdVisitList]
            }
        case visitListConstants.DELETE_VISITED_LIST_BY_ID_REQUEST:
            return {
                deletingVisitedList: true,
                visitedListByUser: state.visitedListByUser,
            }
        case visitListConstants.DELETE_VISITED_LIST_BY_ID_SUCCESS:
            const filteredVisitedList = state.visitedListByUser.filter((list) => {
                return list.destination !== action.info.destination
            })
            return {
                deletedFromPlanToVisit: true,
                visitedListByUser: filteredVisitedList
            }
        case visitListConstants.CREATE_VISITED_LIST_FAILURE:
        case visitListConstants.GET_VISITED_LIST_BY_USER_FAILURE:
        case visitListConstants.DELETE_VISITED_LIST_BY_ID_FAILURE:
            return {}

        default:
            return state
    }
}