import React from 'react'

import '../../Hotel/CheckInCheckout/CheckInCheckOut.css'

import dayjs from 'dayjs';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import PlaceIcon from '@mui/icons-material/Place';

import {SelectComponent, MuiButton} from '../../../Pages/Hotel/AddHotelReview/AddHotelReview.style'

import {useSelector} from 'react-redux'
import useFindTravelPackage from '../../../custom_hooks/useFindTravelPackage'

function DateAndDestination() {
  const [newFindTravelPackage, setFindTravelPackage, findPackage] = useFindTravelPackage()
  const {availableTravelPackage} = useSelector(state => state.getAvailableTravelPackageForBooking)

  const handleChange = (e) => {
      setFindTravelPackage(e.target.name, e.target.value)
  }

  return (
    <Box component='div' variant='div' sx={{
        display: 'flex',
        gap: {xs: '.5em', md: '1em', lg: '2em'},
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '85%',
        padding: '1em .5em',
        backgroundColor: 'rgba(255,255,255,.3)',
        margin: 'auto',
    }}>
        <Box className='date-container'>
            <Typography component='p' variant='body2' fontWeight='600'>From</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                width: '100%',
                minWidth: '150px',
                padding: '.25em 1.5em',
            }}>
                <PlaceIcon />
                <SelectComponent value={newFindTravelPackage.from} id='from' name='updateFrom' onChange={handleChange} style={{
                    boxShadow: 'none',
                    border: 'none'
                }}>
                    {
                        availableTravelPackage && availableTravelPackage.length > 0 && availableTravelPackage.map((travelPackage) => (
                            <option key={travelPackage.id} value={travelPackage.id}>{travelPackage.from}</option>
                        ))
                    }
                </SelectComponent>
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>To</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                width: '100%',
                minWidth: '150px',
                padding: '.25em 1.5em',
            }}>
                <PlaceIcon />
                <SelectComponent id='to' name='updateTo' value={newFindTravelPackage.to} onChange={handleChange} style={{
                    boxShadow: 'none',
                    border: 'none'
                }}>
                    {
                        availableTravelPackage && availableTravelPackage.length > 0 && availableTravelPackage.map((travelPackage) => (
                            <option key={travelPackage.id} value={travelPackage.id}>{travelPackage.to}</option>
                        ))
                    }
                </SelectComponent>
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>departure</Typography>
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
                <input className='input_date' value={newFindTravelPackage.start_date} min={dayjs().format('YYYY-MM-DD')} id='start_date' name='updateDeparture' onChange={handleChange} type='date' />
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>return</Typography>
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
                <input className='input_date' id='end_date' name='updateReturn' type='date' min={dayjs(newFindTravelPackage.start_date).add(1,'day').format('YYYY-MM-DD')} value={newFindTravelPackage.end_date} onChange={handleChange} />
            </Box>
        </Box>
        <Box className='date-container' >
            <Typography component='p' variant='body2' fontWeight='600'>Travellers</Typography>
            <Box sx={{
                minWidth: '150px',
                padding: '.25em 1.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
            }}>
                <PeopleIcon />
                <input className='input-number' id='total_traveler' name='updateTraveler' type='number' value={newFindTravelPackage.total_traveler} onChange={handleChange} />
            </Box>
        </Box>
        <Box  className='date-container'>
            <MuiButton variant='contained' onClick={findPackage} sx={{
                width: '100%',
                minWidth: '150px',
                maxWidth: '100%'
            }} >
                Find Package
            </MuiButton>

        </Box>
    </Box>
  )
}

export default DateAndDestination