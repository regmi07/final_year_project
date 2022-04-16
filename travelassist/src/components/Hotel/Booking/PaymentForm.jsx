import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

function PaymentForm({guest, onGuestChange}) {
  return (
    <Box sx={{marginTop: '2em'}}>
      <Typography component='h4' variant='h6' sx={{
        textAlign: 'left',
        fontWeight: 600
      }}>
        Enter your details
      </Typography>
      <Box sx={{
        width: {xs: '100%', lg: '60%'},
        marginTop: '2em'
      }}>
        <TextField
            required
            id="name"
            name="name"
            label="Name"
            value={guest.name}
            onChange={onGuestChange}
            fullWidth
          />
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={guest.email}
            onChange={onGuestChange}
            fullWidth
            sx={{marginTop: '2em'}}
          />
      </Box>
    </Box>
  )
}

export default PaymentForm