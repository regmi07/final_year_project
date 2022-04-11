import React, {useEffect} from 'react'

import Box from '@mui/material/Box'

import CheckInCheckOut from '../CheckInCheckout/CheckInCheckOut'
import Typography from '@mui/material/Typography'

import {useSelector, useDispatch} from 'react-redux'

import {Link} from 'react-router-dom'

import {hotelActions} from '../../../redux/action'

import {WrapperBox, SubHeading} from '../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'
import {MuiButton} from '../../../Pages/Hotel/AddHotelReview/AddHotelReview.style'

function CheckForAvailability({hotel}) {
  const {checkindate, checkoutdate, rooms} = useSelector(state => state.updateCheckIn)
  const {availableRooms, gettingAvailableRoom, gotAvailableRoom} = useSelector(state => state.availableRoom)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(hotelActions.getAvailableRoomByHotel(checkindate, checkoutdate, rooms, hotel))
  },[rooms, checkindate, checkoutdate])

  console.log('rooms', availableRooms)

  return (
    <WrapperBox display= 'flex'>
        <SubHeading>Check room availability</SubHeading>
        <Box>
            <CheckInCheckOut />
            <Box sx={{
                padding: '.5em',
                marginTop: '.5em'
            }}>
                {
                   gotAvailableRoom ?
                   <>
                    <Typography sx={{fontSize: '1.1rem', fontWeight: '500'}}>
                        Available at 
                        <span style={{margin: '0 5px'}}>
                            <strong>
                                Rs.
                                {
                                    gotAvailableRoom && availableRooms.length > 0 && availableRooms[0]?.price
                                }
                            </strong>
                        </span>
                        per night
                    </Typography>
                    <MuiButton component={Link} to={`/hotels/booking/${hotel}`} variant='contained' sx={{marginTop: '1em'}}>Book Now</MuiButton>
                   </>
                   :
                        <Typography sx={{fontSize: '1.1rem', fontWeight: '500'}}>
                            Sorry, Not enough rooms available 
                        </Typography>
                }
            </Box>
        </Box>
    </WrapperBox>
  )
}

export default CheckForAvailability