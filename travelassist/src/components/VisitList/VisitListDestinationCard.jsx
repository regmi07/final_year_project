import React from 'react'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import DisplayRating from '../Ratings/DisplayRatings/DisplayRatings'

import {Link} from 'react-router-dom'

import {WrapperBox} from '../../Pages/Hotel/SpecificHotel/SpecificHotel.style'


function VisitListDestinationCard({list}) {
  const boxStyle = {
    display: 'flex',
  }
    console.log(list)
  return (
    <WrapperBox>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {xs: '.2em' ,md: '.5em'}
            }}>
                <Avatar alt={`${list.username} photo`} src={list.profilePicture} />
                <Box>
                    <Typography component='h5' sx={{fontWeight: 'bold', textAlign: 'left'}}>
                        {list.name}
                    </Typography>
                    <Typography component='p' variant='subtitle2' sx={{textAlign: 'left'}}>
                        @{list.username}
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{marginTop: '1em'}}>
            <Typography component='h5' sx={{fontWeight: 'bold', textAlign: 'left'}}>
                {list.visit_summary}
            </Typography>
            <Typography component='p' variant='subtitle2' sx={{textAlign: 'left'}}>
                {list.experience.substring(0,400)}... <Link to={`/visitedlistdetails/${list.destination}`}>read more</Link>
            </Typography>
        </Box>
        <Box sx={{marginTop: '.5em'}}>
            <Box sx={boxStyle}>
                <Typography component='div' variant='body2' sx={{fontWeight: 600}}>Stay: </Typography>
                <DisplayRating rating={list.stay} size='small' />
            </Box>
            <Box sx={boxStyle}>
                <Typography component='div' variant='body2' sx={{fontWeight: 600}}>Transportation: </Typography>
                <DisplayRating rating={list.transportation} size='small' />
            </Box>
            <Box sx={boxStyle}>
                <Typography component='div' variant='body2' sx={{fontWeight: 600}}>Sites: </Typography>
                <DisplayRating rating={list.sites} size='small' />
            </Box>
        </Box>
    </WrapperBox>
  )
}

export default VisitListDestinationCard