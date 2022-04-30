import React, {useEffect} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'

import {useDispatch,useSelector} from 'react-redux'
import {travelPackageActions} from '../../../../redux/action'
import {WrapperBox} from '../../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

function TravelPackageBookingHistory() {
  const {user} = useSelector(state => state.signin) 
  const {travelPackageBookingByUser} = useSelector(state => state.getTravelPackageByUser) 
  const dispatch = useDispatch()    

  useEffect(() => {
      dispatch(travelPackageActions.getTravelPackageBookingByUser(user.id))
   },[dispatch,user.id])
  return (
    <Box>
    {
        travelPackageBookingByUser?.length > 0 ? (
            travelPackageBookingByUser.map((booking,index) => {
                return <WrapperBox key={`${booking.booking_id} ${index}`}>
                    <Typography sx={{textAlign: 'left'}}>
                        You booked <strong>{booking.travel_package}</strong> travel package on <strong>{booking.booked_on}</strong> 
                    </Typography>
                    <Box sx={{
                        display: {xs: 'block', md:'flex'}, 
                        gap: '3em',
                        marginTop: '1em'
                    }}>
                        <Box sx={{
                            padding: '1em 2em',
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                            textAlign: 'left'
                        }}>
                            <h4>Booking details</h4>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                Travel Agency: {booking.travel_agency}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                From: {booking.from}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                To: {booking.to}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                Departure: {booking.start_date}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                Return: {booking.end_date}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                total traveler: {booking.total_traveler}
                            </Typography>
                        </Box>
                        <Box sx={{
                            padding: '1em 2em',
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                            textAlign: 'left'
                        }}>
                            <h4>Payment details</h4>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                payment type: {booking.paymenttype}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                paid amount: Rs. {booking.paidamount}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                total amount: Rs. {booking.total_amount}
                            </Typography>
                            <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                paid on: {booking.paymentdate}
                            </Typography>
                        </Box>
                    </Box>
                </WrapperBox>
            })
        )
        : (<h2>No booking history found</h2>)
    }
</Box>
  )
}

export default TravelPackageBookingHistory