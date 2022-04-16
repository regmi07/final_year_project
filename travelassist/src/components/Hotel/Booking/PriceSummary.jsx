import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function PriceSummary({rooms, price}) {
  return (
    <Box sx={{marginTop: '2em', textAlign: 'left'}}>
        <Typography component='h4' variant='h6' sx={{fontWeight: 600}}>
            Your price summary
        </Typography>
        <Typography component='p' variant='subtitle2' sx={{marginTop: '1em'}}>
            Price per night: <strong>Rs. {price}</strong>
        </Typography>
        <Typography component='p' variant='subtitle2' sx={{marginTop: '1em'}}>
            Total price: <strong>Rs. {price * rooms}</strong>
        </Typography>
    </Box>
  )
}

export default PriceSummary