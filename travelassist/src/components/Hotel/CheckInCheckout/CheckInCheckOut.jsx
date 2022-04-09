import React, {useState} from 'react'

import './CheckInCheckOut.css'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';

import TravelerModal from '../Modal/Modal'
import {useDispatch, useSelector} from 'react-redux'

import {updateCheckInAction} from '../../../redux/action'
import dayjs from 'dayjs';

function CheckInCheckOut() {
  const {rooms, traveller, checkindate, checkoutdate} = useSelector(state => state.updateCheckIn)
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

  return (
    <Box component='div' variant='div' sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '85%',
        padding: '1em .5em',
        backgroundColor: 'rgba(255,255,255,.3)',
    }}>
        <Box sx={{backgroundColor: '#fffafa', flexGrow: 1, margin: '.5em 1em'}}>
            <Typography component='p' variant='body2' fontWeight='600'>Check in</Typography>
            <Box className='date-container' sx={{
                position: 'relative',
                width: '100%',
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
                <input className='input_date' value={checkindate} min={dayjs().format('YYYY-MM-DD')} onChange={handleCheckInDateChange} id='check-in' type='date' />
            </Box>
        </Box>
        <Box sx={{backgroundColor: '#fffafa', flexGrow: 1, margin: '.5em 1em'}}>
            <Typography component='p' variant='body2' fontWeight='600'>Check out</Typography>
            <Box className='date-container' sx={{
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
        <Box sx={{backgroundColor: '#fffafa', flexGrow: 1, margin: '.5em 1em'}}>
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