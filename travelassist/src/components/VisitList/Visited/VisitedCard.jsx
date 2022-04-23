import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

import {WrapperBox} from '../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

function VisitedCard({list}) {
  return (
    <WrapperBox>
        <Box sx={{display: 'flex', gap: '1em', marginTop: '1.5em', alignItems: 'center'}}>
            <Box
                component="img"
                sx={{
                    height: 70,
                    width: 60,
                    objectPosition: 'center',
                    objectFit: 'cover',
                    borderRadius: '5px'
                }}
                alt={`${list.name} image`}
                src={list.coverimage}
            />
            <Box sx={{
                textAlign: 'left',
                width: {xs: '100%', md: '250px'}
            }}>
                <Typography component={Link} to={`/destinations/${list.destination}`} variant='body2' sx={{
                    textAlign: 'left',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: '#000'
                }}>
                    {list.name}
                </Typography>
                <Typography component='div' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '.8rem'
                    }}>
                    <PlaceIcon fontSize='small' /> <span>{list.location}</span>
                </Typography>
            </Box>
        </Box>
        <Box sx={{marginTop: '.75em'}}>
            <Typography component='h5' sx={{fontWeight: 600, textAlign: 'left'}}>
                {list.visit_summary}
            </Typography>
            <Typography component='p' variant='subtitle2' sx={{textAlign: 'justify'}}>
                {list.experience}
                <Link to={`/visitedlistdetails/${list.destination}`}>read more</Link>
            </Typography>
        </Box>
    </WrapperBox>
  )
}

export default VisitedCard