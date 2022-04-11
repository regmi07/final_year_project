import React from 'react'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FlagIcon from '@mui/icons-material/Flag';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import {WrapperBox} from '../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'
import DisplayRating from '../../Ratings/DisplayRatings/DisplayRatings'

import {useSelector, useDispatch} from 'react-redux'

import {likedReviewActions} from '../../../redux/action'

function ReviewCard({review}) {
  const {likeInfo} = useSelector(state => state.likedReviews)
  const {user} = useSelector(state => state.signin)

  const dispatch = useDispatch()

  const findLikedReview = () => {
      return likeInfo.findIndex((like) => {
          if(like)
            return like.liked_by === user.id && like.review_for === review.hotel && like.review_by === review.user
          return -1
      })
  }

  const isLiked = () => {
    return findLikedReview() >= 0 ? true : false
  }

  const likeOnClick = () => {
      if(isLiked()) {
        dispatch(likedReviewActions.deleteLikeFromReview(user.id,review.hotel,review.user))
      }
      else{
        dispatch(likedReviewActions.addLikeToReview(user?.id,review.hotel,review.user))
      }
  }

  return (
      <WrapperBox>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {xs: '.2em' ,md: '.5em'}
            }}>
                <Avatar alt={`${review.username} photo`} src={review.profilepicture} />
                <span><strong>{review.name}</strong></span>
                <span style={{fontSize: 'clamp(.7rem,2vw,.9rem)'}}>
                    wrote a review on {review.updated_on.substring(0, 10)}
                </span>
            </Box>
            <Box>
                <IconButton aria-label='like review' color={isLiked() ? 'primary' : 'default'} onClick={likeOnClick}>
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label='report review'>
                    <FlagIcon />
                </IconButton>
            </Box>
        </Box>
        <Box sx={{
            // padding: '1.5em'
            marginTop: '1em'
        }}>
            <DisplayRating rating={review.rating} />
            <Typography component='h6' variant='body1' sx={{
                textAlign: 'left',
                fontWeight: '600',
                margin: '.3em 0',
            }}>
                {review.review_title}
            </Typography>
            <Typography variant='body2' sx={{
                // padding: '1.5em',
                textAlign: 'justify'
            }}>
                {`"${review.review}"`}
            </Typography>
            <Typography component='div' variant='subtitle2' sx={{textAlign: 'left', marginTop: '1em'}}>
                <strong>Date of stay</strong> {`${review.date_of_stay}`}
            </Typography>
        </Box>
      </WrapperBox>
  )
}

export default ReviewCard