import React, {useState,useEffect} from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {travelPackageActions} from '../../../redux/action/travel_package.action'

import BookingInfo from '../../../components/TravelPackage/TravelPackageBooking/BookingInfo'
import PriceSummary from '../../../components/TravelPackage/TravelPackageBooking/PriceSummary'
import PaymentForm from '../../../components/Hotel/Booking/PaymentForm'

import Khalti from '../../../components/Payment/Khalti'

import {useParams} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

function TravelPackageBooking() {
  const {packageId} = useParams()

  const dispatch = useDispatch()
  const {travelPackageById} = useSelector(state => state.travelPackageById)
  const {total_traveler} = useSelector(state => state.updateDateAndDest)
  const {user} = useSelector(state => state.signin)

  useEffect(() => {
      dispatch(travelPackageActions.getTravelPackageById(packageId))
  },[dispatch, packageId])

  const [guest, setGuest] = useState({
    name: '',
    email: ''
})

const onGuestChange = e => {
    console.log(e.target.value)
    setGuest({...guest, [e.target.name]: [e.target.value]})
}

const [payVia, setPayVia] = React.useState('pay at stay');

const handleRadioButtonChange = (event) => {
    setPayVia(event.target.value);
};

const onBookingButtonClick = () => {
    dispatch(travelPackageActions.bookTravelPackage({
        payment_type: payVia, 
        paid_amount: 0, 
        total_amount: travelPackageById.priceperperson * total_traveler,
        total_traveler: total_traveler, 
        user_id: user.id, 
        travel_package: travelPackageById.title,
        travel_package_id: packageId,
        travel_agency: travelPackageById.travel_agency, 
        start_date: travelPackageById.start_date,
        end_date: travelPackageById.end_date,
        name: guest.name,
        email: guest.email
    }))
}


if(!travelPackageById){
  return <h1>Getting Info</h1>
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
          <BookingInfo departure={travelPackageById.start_date} returnDate={travelPackageById.end_date} traveller={total_traveler} />
          <PriceSummary traveller={total_traveler} price={travelPackageById.priceperperson} />
      </Box>
      <Box sx={{
          padding: '1.5em',
          flexGrow: 2, 
      }}>
          <Box sx={{
              display: 'flex',
          }}>
            <Box component='img' src={travelPackageById.imagesrc[0]} sx={{
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
                    {travelPackageById.title}
                </Typography>
                <Typography component='div' variant='subtitle2' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    {travelPackageById.agency_name}
                </Typography>
            </Box>
          </Box>
          <Box></Box>
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
                    payVia === 'khalti' ? <Khalti total_amount={travelPackageById.priceperperson * total_traveler} value={payVia} /> : (
                        <Button variant='contained' onClick={onBookingButtonClick}>Book</Button>
                    )
                }
      </Box>
  </Container>
  )
}

export default TravelPackageBooking