import React from 'react'

import AddRatings from '../../../components/Ratings/AddRatings/AddRatings'

import Container from '@mui/material/Container'

import {dateRange} from '../../../helpers/daterange'

import {InputBox, TextArea, Label, SelectComponent, MuiButton} from './AddHotelReview.style'

import useReview from '../../../custom_hooks/useReviews'

import {useParams} from 'react-router-dom'

function AddHotelReview() {
  const {hotelId} = useParams()
  const [newReview, setReview, postReview] = useReview(hotelId)

  const onFormSubmit = (e) => {
    e.preventDefault()
    postReview()
  }

  return (
    <Container maxWidth='lg'>
      <Label>
        Your overall rating of this hotel
      </Label>
      <AddRatings rating={newReview.rating} setRating={setReview} />
      <form style={{textAlign: 'left'}} onSubmit={onFormSubmit}>
        <Label htmlFor='review-title'>
          Title of your review
        </Label>
        <InputBox type='text' value={newReview.review_title} id='review_title' name='review_title' onChange={e => setReview(e.target.name, e.target.value)} placeholder='Summarize your visit or highlight an intresting detail' />
        <Label htmlFor="review">
          Your review
        </Label>
        <TextArea id='review' value={newReview.review} name='review' onChange={e => setReview(e.target.name,e.target.value)} placeholder='Tell people about your experience' />
        <Label htmlFor='date_of_stay'>
          When did you travel?
        </Label>
        <SelectComponent value={newReview.date_of_stay} id='date_of_stay' name='date_of_stay' onChange={e => setReview(e.target.name, e.target.value)} >
          {
            dateRange().map((month, index) => {
              return <option key={index} value={month}>{month}</option>
            })
          }
        </SelectComponent>
        <div style={{marginTop: '3em'}}>
          <MuiButton variant='contained' type='submit'>Submit your review</MuiButton>
        </div>
      </form>
    </Container>
  )
}

export default AddHotelReview