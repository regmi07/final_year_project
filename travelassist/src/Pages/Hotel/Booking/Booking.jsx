import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place';

import DisplayRating from '../../../components/Ratings/DisplayRatings/DisplayRatings'

import {useDispatch, useSelector} from 'react-redux'

function Booking() {
    const {hotelById} = useSelector(state => state.getHotelById)
    const {availableRooms} = useSelector(state => state.availableRoom)
    const {checkindate, checkoutdate, rooms} = useSelector(state => state.updateCheckIn)
    console.log('booking', hotelById)
  return (
      <Container maxWidth='lg'>
          <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
          }}>
            <Box sx={{border: '1px solid green', padding: '1em'}}>
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
                <Box component='img' src={hotelById.imagesrc[0]} sx={{
                    height: '300px',
                    width: '350px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} />
                <DisplayRating rating={hotelById.average_rating} size={'small'} />
            </Box>
            <Box>

            </Box>
          </Box>
      </Container>
  )
}

export default Booking