import {hotelConstant} from '../../constants'

export function getAvailableRoomByHotel(state = {}, action){
    switch(action.type){
        case hotelConstant.GET_AVAILABLE_ROOM_REQUEST:
            return {
                gettingAvailableRoom: true,
            }
        case hotelConstant.GET_AVAILABLE_ROOM_SUCCESS:
            return {
                gotAvailableRoom: true,
                availableRooms: action.availableRoomByHotel
            }
        case hotelConstant.GET_AVAILABLE_ROOM_FAILURE:
            return {}
        default:
            return state
    }
}