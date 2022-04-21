import React, {useState,useEffect} from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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

console.log(travelPackageById)

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
          <PaymentForm guest={guest} onGuestChange={onGuestChange} />
          <Khalti total_amount={travelPackageById.priceperperson * total_traveler} />
      </Box>
  </Container>
  )
}

export default TravelPackageBooking