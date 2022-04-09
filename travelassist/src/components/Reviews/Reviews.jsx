import React,{useEffect} from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import {SubHeading} from '../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

import {useDispatch, useSelector} from 'react-redux'

import {reviewActions} from '../../redux/action' 

import ReviewCard from './ReviewCard/ReviewCard'

import {Link} from 'react-router-dom'

function Reviews({hotelId}) {
  const {gettingReviewsByHotel,reviewByHotel} = useSelector(state => state.getReviewsByHotel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reviewActions.getReviewByHotel(hotelId))
  },[hotelId, dispatch])

  if(gettingReviewsByHotel){
      return (
          <h1>getting reviews...</h1>
      )
  }

  return (
      <Box>
        <Box sx={{
            marginTop: '2em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <SubHeading>Reviews</SubHeading>
            <Button component={Link} to={`/hotels/addreview/${hotelId}`} variant='contained' sx={{
                fontWeight: '600',
                textTransform: 'none', 
                fontSize: '.9rem'
            }}>
                Write a review
            </Button>
        </Box>
        <Box>
            {
                reviewByHotel && reviewByHotel.map((review) => {
                    return <ReviewCard review={review} key={`${review.user} ${review.hotel}`} />
                })
            }
        </Box>
      </Box>
  )
}

export default Reviews