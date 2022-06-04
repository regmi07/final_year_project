import React, {useEffect} from 'react'
import CheckInCheckOut from '../../components/Hotel/CheckInCheckout/CheckInCheckOut'
import HotelInfoCard from '../../components/Hotel/HotelInfoCard/HotelInfoCard'

import Container from '@mui/material/Container'

import HotelHero from './Hotel.style'

import {useSelector, useDispatch} from 'react-redux'

import {hotelActions} from '../../redux/action'

function Hotel() {
  const {checkindate, checkoutdate, rooms, destination_id} = useSelector(state => state.updateCheckIn)
  const {availableHotels, gettingAvailableHotels} = useSelector(state => state.availableHotels)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hotelActions.getAvailableHotelsByDestination(checkindate,checkoutdate, rooms, destination_id))
  },[rooms, checkindate, checkoutdate, destination_id])

  return (
    <Container maxWidth='lg'>
        <HotelHero>
          <CheckInCheckOut isHotelPage={true} />  
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