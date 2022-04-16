import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import {Link} from 'react-router-dom'

function BookingInfo({checkindate, checkoutdate, rooms, hotel}) {
 
  return (
    <Box>
        <Typography component='h4' variant='h6' sx={{fontWeight: 600, textAlign: 'left'}}>
            Your booking details
        </Typography>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5em',
            marginTop: '1em'
        }}>
            <Box sx={{padding: '10px 3em', backgroundColor: '#f7f2f2'}}>
                <Typography component='p' variant='body' sx={{textAlign: 'left'}}>
                    check-in
                </Typography>
                <div style={{border: '.5px solid grey'}} />
                <Typography component='p' variant='subtitle2' sx={{fontWeight: 600, marginTop: '10px'}}>
                    {checkindate}
                </Typography>
            </Box>
            <Box sx={{padding: '10px 3em', backgroundColor: '#f7f2f2'}}>
                <Typography component='p' variant='body' sx={{textAlign: 'left'}}>
                    check-out
                </Typography>
                <div style={{border: '.5px solid grey'}} />
                <Typography component='p' variant='subtitle2' sx={{fontWeight: 600, marginTop: '10px'}}>
                    {checkoutdate}
                </Typography>
            </Box>
        </Box>
        <Box sx={{marginTop: '1em', padding: '10px 3em', backgroundColor: '#f7f2f2'}}>
            <Typography component='p' variant='body'>
                Rooms selected: 
            </Typography>
            <Typography component='p' variant='subtitle2' sx={{fontWeight: 600, marginTop: '10px'}}>
                    {rooms}
            </Typography>
        </Box>
        <Typography component={Link} to={`/hotels/${hotel}`} variant='subtitle2' sx={{
            textAlign: 'left',
            textDecoration: 'none',
            fontWeight: 600,
            color: '#1976d2'
        }}>
            Travelling on different dates ?
        </Typography>
    </Box>
  )
}

export default BookingInfo