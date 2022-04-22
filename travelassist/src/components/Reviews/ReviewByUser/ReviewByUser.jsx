import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {reviewActions} from '../../../redux/action'

import './ReviewByUser.css'

import {Link} from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import {WrapperBox} from '../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

import DisplayRatings from '../../Ratings/DisplayRatings/DisplayRatings'

function ReviewByUser() {
  const {user} = useSelector(state => state.signin)
  const {gettingReviewByUser, reviewByUser} = useSelector(state => state.reviewByUser)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(reviewActions.getReviewByUser(user.id))
  },[dispatch, user.id])

  const onDeleteClick = (hotelId) => {
    dispatch(reviewActions.deleteReviewById(hotelId,user.id))
  }

  if(gettingReviewByUser){
      return <h3>Getting reviews...</h3>
  }

  console.log(reviewByUser)

  return (
    <Box>
        {
            reviewByUser && reviewByUser.length > 0 ?
            reviewByUser.map((review) => {
                return (
                    <WrapperBox key={`${user.id} ${review.hotel}`} sx={{marginTop: '0', marginBottom: '2em'}}>
                        <Box sx={{
                            display: 'flex', 
                            justifyContent: 'space-between',
                            borderBottom: '1px solid silver',
                        }}>
                            <Typography className='span-bold-parent' component='div' variant='p' sx={{
                                textAlign: 'left'
                            }}>
                                <span className='span-bold'>You</span> wrote review on <span className='span-bold'>{review.created_on.substring(0,10)}</span> for <Typography className='span-bold' component={Link} to={`/hotels/${review.hotel}`}>{review.review_for}</Typography>
                            </Typography>
                            <Tooltip title="Delete Review">
                                <IconButton onClick={() => onDeleteClick(review.hotel)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box>
                            <Typography component='h5' variant='body1' sx={{textAlign: 'left', marginTop: '.75em', fontWeight: '600'}}>
                                {review.review_title}
                            </Typography>
                            <DisplayRatings rating={review.rating} size={'small'} />
                            <Typography component='p' variant='body2' sx={{
                                textAlign: 'justify',
                                marginTop: '.75em'
                            }}>
                                {review.review}
                            </Typography>
                            <Typography component='p' variant='body2' sx={{textAlign: 'left', marginTop: '.75em'}}>
                                <span className='span-bold'>Date of stay: </span> {review.date_of_stay}
                            </Typography>
                            <Typography component='div' sx={{
                                display: 'flex',
                                marginTop: '.75em'
                            }}>
                                <ThumbUpIcon /> <span style={{marginLeft: '5px'}}>{review.total_likes}</span>
                            </Typography>
                        </Box>
                    </WrapperBox>
                )
            })
            : <h4>No reviews found</h4>
        }
    </Box>
  )
}

export default ReviewByUser