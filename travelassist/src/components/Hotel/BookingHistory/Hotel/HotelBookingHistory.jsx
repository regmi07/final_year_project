import React, {useEffect} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'

import {useDispatch,useSelector} from 'react-redux'
import {bookingActions} from '../../../../redux/action'
import {WrapperBox} from '../../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

function HotelBookingHistory() {

  const {user} = useSelector(state => state.signin) 
  const {bookingByUser} = useSelector(state => state.hotelBookingByUser) 
  const dispatch = useDispatch()    

  useEffect(() => {
      dispatch(bookingActions.getBookingByUser(user.id))
   },[dispatch,user.id])

   console.log(bookingByUser)

  return (
    <Box>
        {
            bookingByUser?.length > 0 ? (
                bookingByUser.map((booking,index) => {
                    return <WrapperBox key={`${booking.booking_id} ${index}`}>
                        <Typography sx={{textAlign: 'left'}}>
                            You booked <strong>{booking.hotel_name}</strong> on <strong>{booking.booked_on}</strong> 
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
                                    Check in date: {booking.check_in_date}
                                </Typography>
                                <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                    Check out date: {booking.check_out_date}
                                </Typography>
                                <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                    total traveler: {booking.total_traveler}
                                </Typography>
                                <Typography sx={{textAlign: 'left'}} component='p' variant='subtitle1'>
                                    booked by: {booking.booked_by}
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

export default HotelBookingHistory