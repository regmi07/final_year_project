import React, {useState,useEffect} from 'react'

import './CheckInCheckOut.css'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';

import TravelerModal from '../Modal/Modal'
import {useDispatch, useSelector} from 'react-redux'

import {updateCheckInAction, destinationActions} from '../../../redux/action'
import dayjs from 'dayjs';

function CheckInCheckOut({isHotelPage}) {
  const {rooms, traveller, checkindate, checkoutdate, destination_id} = useSelector(state => state.updateCheckIn)
  const {allDestinations} = useSelector(state => state.getAllDestination)
  const [openTravelerModal, setOpenTravelerModal] = useState(false)
  const handleOpenTravelerModal = () => {
      setOpenTravelerModal(true)
  }

  const dispatch = useDispatch()

  const handleCloseTravelerModal = () => {
      setOpenTravelerModal(false)
  }

  const handleCheckInDateChange = (e) => {
  dispatch(updateCheckInAction.updateCheckInDate(e.target.value))
}

  const handleCheckOutDateChange = (e) => {
    dispatch(updateCheckInAction.updateCheckOutDate(e.target.value))
  }

  const handleDestinationChange = (e) => {
      console.log(e.target.value, 'destination_id')
      dispatch(updateCheckInAction.updateDestination(e.target.value))
  }

  useEffect(() => {
    dispatch(destinationActions.getAllDestination())
  },[])

  return (
    <Box component='div' variant='div' sx={{
        display: 'flex',
        gap: '2em',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '90%',
        padding: '1em .5em',
        backgroundColor: 'rgba(255,255,255,.3)',
        margin: 'auto',
    }}>
        {
            isHotelPage && <Box className='date-container' >
                <Typography component='p' variant='body2' fontWeight='600'>Destination</Typography>
                {
                    allDestinations && <select value={destination_id ? destination_id : allDestinations[0].id} id='select_destination' name='select_destination' onChange={handleDestinationChange}>
                        {
                            allDestinations.map((dest) => {
                                return <option key={dest.id} value={dest.id}>{dest.name}</option>
                            })
                        }
                    </select>
                }
            </Box>

        }
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>Check in</Typography>
            <Box sx={{
                position: 'relative',
                width: '100%',
                minWidth: '150px',
                padding: '.25em 1.5em',
            }}>
                <DateRangeIcon sx={{
                    position: 'absolute', 
                    left: '.9em', 
                    top: '50%',
                    transform: 'translateY(-50%)'
                }} />
                <input className='input_date' value={checkindate} min={dayjs().format('YYYY-MM-DD')} onChange={handleCheckInDateChange} id='check-in' type='date' />
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>Check out</Typography>
            <Box sx={{
                position: 'relative', 
                // maxWidth: '180px', 
                minWidth: '150px',
                padding: '.25em 1.5em',
            }}>
                <DateRangeIcon sx={{
                    position: 'absolute', 
                    left: '.9em', 
                    top: '50%',
                    transform: 'translateY(-50%)'
                }} />
                <input className='input_date' value={checkoutdate} min={dayjs(checkindate).add(1,'day').format('YYYY-MM-DD')} onChange={handleCheckOutDateChange} id='check-out' type='date' />
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>Guests</Typography>
            <Box onClick={handleOpenTravelerModal} sx={{
                minWidth: '150px',
                padding: '.25em 1.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
            }}>
                <PeopleIcon />
                <Typography component='div' ml={1} variant='subtitle2' sx={{flexGrow: 1}}>
                    {
                        `${rooms} rooms ${traveller} travellers`
                    }
                </Typography>
            </Box>
        </Box>
        <TravelerModal open={openTravelerModal} handleClose={handleCloseTravelerModal} rooms={rooms} traveller={traveller} />
    </Box>
  )
}

export default CheckInCheckOut