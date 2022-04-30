import React, {useState} from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import DisplayRating from '../../../components/Ratings/DisplayRatings/DisplayRatings'
import PaymentForm from '../../../components/Hotel/Booking/PaymentForm'
import BookingInfo from '../../../components/Hotel/Booking/BookingInfo'
import PriceSummary from '../../../components/Hotel/Booking/PriceSummary'
import Khalti from '../../../components/Payment/Khalti'

import {useParams} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

import {bookingActions} from '../../../redux/action'

function Booking() {
    const dispatch = useDispatch()
    const {hotelId} = useParams()
    const {hotelById} = useSelector(state => state.getHotelById)
    const {availableRooms} = useSelector(state => state.availableRoom)
    const {checkindate, checkoutdate, traveller, rooms} = useSelector(state => state.updateCheckIn)
    const {user} = useSelector(state => state.signin)

    const [guest, setGuest] = useState({
        name: '',
        email: ''
    })

    const [payVia, setPayVia] = React.useState('pay at stay');

    const handleRadioButtonChange = (event) => {
        setPayVia(event.target.value);
    };

    const onGuestChange = e => {
        setGuest({...guest, [e.target.name]: [e.target.value]})
    }

    const onBookingButtonClick = () => {
        dispatch(bookingActions.bookRoom(payVia, 0, rooms * availableRooms[0].price * traveller,traveller,user.id,checkindate,checkoutdate,availableRooms.slice(0,rooms), guest.name, guest.email,hotelById.name))
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
              <Box>
                <PaymentForm guest={guest} onGuestChange={onGuestChange} />
                <FormControl sx={{ width: '100%', textAlign: 'left', marginTop: '2em'}}>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{fontWeight: 600}}>Select Payment method:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={payVia}
                        onChange={handleRadioButtonChange}
                        sx={{display: 'inline-block'}}
                    >
                        <FormControlLabel value="pay at stay" control={<Radio />} label="Pay at stay" />
                        <FormControlLabel value="khalti" control={<Radio />} label="Khalti" />
                    </RadioGroup>
                </FormControl>

                {
                    payVia === 'khalti' ? <Khalti total_amount={availableRooms[0].price * rooms} value={payVia} /> : (
                        <Button variant='contained' onClick={onBookingButtonClick}>Book</Button>
                    )
                }
              </Box>
          </Box>
      </Container>
  )
}

export default Booking