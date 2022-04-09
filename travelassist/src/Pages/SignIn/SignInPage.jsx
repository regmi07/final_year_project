import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

function SignInPage() {
  return (
    <div className="pagecontainer" style={{position: 'relative', height: '100vh'}} >
      <Container maxWidth="md" sx={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}>
        <CssBaseline />
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <SignIn />
            </Grid>
            <Grid item sm={6} sx={{display: {xs: 'none', sm:'block'}}}>
              <Box 
                component="img"
                alt="Sign In Image"
                src={require('../../assests/signinimage.png')}
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                }}
              >
              </Box>
            </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SignInPage