import React, {useState} from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place';

import DisplayRating from '../../../components/Ratings/DisplayRatings/DisplayRatings'
import PaymentForm from '../../../components/Hotel/Booking/PaymentForm'
import BookingInfo from '../../../components/Hotel/Booking/BookingInfo'
import PriceSummary from '../../../components/Hotel/Booking/PriceSummary'
import Khalti from '../../../components/Payment/Khalti'

import {useParams} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

function Booking() {
    const {hotelId} = useParams()
    const {hotelById} = useSelector(state => state.getHotelById)
    const {availableRooms} = useSelector(state => state.availableRoom)
    const {checkindate, checkoutdate, rooms} = useSelector(state => state.updateCheckIn)

    const [guest, setGuest] = useState({
        name: '',
        email: ''
    })

    const onGuestChange = e => {
        console.log(e.target.value)
        setGuest({...guest, [e.target.name]: [e.target.value]})
    }

  return (
      <Container maxWidth='lg' sx={{
          display: {xs: 'block', md: 'flex'},
          justifyContent: 'space-between',
          marginTop: '2em'
      }}>
          <Box sx={{
              padding: '1.5em',
          }}>
              <BookingInfo checkindate={checkindate} checkoutdate={checkoutdate} rooms={rooms} hotel={hotelId} />
              <PriceSummary rooms={rooms} price={availableRooms[0].price} />
          </Box>
          <Box sx={{
              padding: '1.5em',
              flexGrow: 2, 
          }}>
              <Box sx={{
                  display: 'flex',
              }}>
                <Box component='img' src={hotelById.imagesrc[0]} sx={{
                        height: '120px',
                        width: '120px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        marginRight: '1em'
                }} />
                <Box>
                    <Typography component='div' variant='h5' sx={{
                        fontWeight: 600,
                        textAlign: 'left',
                        paddingLeft: '.1em',
                    }}>
                        {hotelById.name}
                    </Typography>
                    <Typography component='div' variant='subtitle2' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}>
                        <PlaceIcon fontSize='small' />
                        {hotelById.location}
                    </Typography>
                    <DisplayRating rating={hotelById.average_rating} size={'small'} />
                </Box>
              </Box>
              <PaymentForm guest={guest} onGuestChange={onGuestChange} />
              <Khalti total_amount={availableRooms[0].price * rooms} />
          </Box>
      </Container>
  )
}

export default Booking