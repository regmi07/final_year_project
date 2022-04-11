import React, {useEffect} from 'react'
import CheckInCheckOut from '../../components/Hotel/CheckInCheckout/CheckInCheckOut'
import HotelInfoCard from '../../components/Hotel/HotelInfoCard/HotelInfoCard'

import Container from '@mui/material/Container'

import HotelHero from './Hotel.style'

import {useSelector, useDispatch} from 'react-redux'

import {hotelActions} from '../../redux/action'

import {useParams} from 'react-router-dom'

function Hotel() {
  const {checkindate, checkoutdate, rooms} = useSelector(state => state.updateCheckIn)
  const {availableHotels, gettingAvailableHotels} = useSelector(state => state.availableHotels)

  console.log(rooms)

  const {destid} = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hotelActions.getAvailableHotelsByDestination(checkindate,checkoutdate, rooms, destid))
  },[rooms, checkindate, checkoutdate])

  console.log(availableHotels)
  return (
    <Container maxWidth='lg'>
        <HotelHero>
          <CheckInCheckOut />  
        </HotelHero>
        <div className="cardcontainer">
          {
            availableHotels? availableHotels.map((hotel) => {
              return <HotelInfoCard key={hotel.id} hotel={hotel} />
            })
            : <h1>No data found</h1>
          }
        </div>
    </Container>
  )
}

export default Hotel