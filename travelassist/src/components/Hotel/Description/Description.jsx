import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'

import {WrapperBox, SubHeading} from '../../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

function Description({description}) {
  return (
      <WrapperBox>
        <SubHeading>
            About
        </SubHeading>
        <Box sx={{
            display: {xs: 'block', md: 'flex'},
            justifyContent: 'space-between',
            gap: '3em',
        }}>
                <Typography component='div' variant='body2' sx={{ 
                    flex: '1 1 0px',
                    textAlign: 'justify',
                    fontSize: '.85rem'
                }}>{description}</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flex: '1 1 0px',
                }}>
                    <Box>
                        <h5>Amenities</h5>
                    </Box>
                    <Box>
                        <h5>Room Type</h5>
                    </Box>
                    <Box>
                        <h5>Room Features</h5>
                    </Box>
                </Box>
        </Box>
      </WrapperBox>
  )
}

export default Description