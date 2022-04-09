import React from 'react'

import SignUp from '../../components/SignUp/SignUp'
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
            <Grid item xs={12} md={6}>
              <SignUp />
            </Grid>
            <Grid item xs={6} sx={{display: {xs: 'none', md: 'block'}}}>
              <Box 
                component="img"
                alt="Sign Up Image"
                src={require('../../assests/signupimage.png')}
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