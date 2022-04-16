import {useSelector,useDispatch} from 'react-redux';
import {travelPackageActions, updateDateAndDestinationActions} from '../redux/action'

export default function useFindTravelPackage(){
    const dispatch = useDispatch()
    const newFindTravelPackage = useSelector(state => state.updateDateAndDest)

    const setFindTravelPackage = (name, value) => {
        console.log(value, ' value')
        dispatch(updateDateAndDestinationActions[name](value))
    }

    const findPackage = () => {
        dispatch(travelPackageActions.getAvailableTravelPackageForBooking(newFindTravelPackage))
    }

    return [newFindTravelPackage, setFindTravelPackage, findPackage]
}