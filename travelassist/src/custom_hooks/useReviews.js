import {useState} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {reviewActions} from '../redux/action'

export default function useReview(hotelId){
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.signin)

    const [newReview, setNewReview] = useState({
        rating: 0,
        review_title: '',
        review: '',
        date_of_stay: ''
    })

    const setReview = (name, value) => {
        setNewReview({...newReview,[name]: value})
    }

    const postReview = () => {
        dispatch(reviewActions.postReview(user.id,hotelId,newReview.rating,newReview.review_title,newReview.review,newReview.date_of_stay))
    }

    return [newReview, setReview, postReview]
}