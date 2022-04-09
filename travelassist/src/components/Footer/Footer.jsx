import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <div style={{
        marginTop: '3em', 
        backgroundColor: '#faf1ed', 
    }}>
        <Container maxWidth='lg' sx={{
            // backgroundColor: 'red',
            paddingTop: '2em',
            paddingBottom: '2em'
        }}>
            <CssBaseline />
            <Box display='flex' sx={{
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box sx={{textAlign: 'left'}}>
                    <Typography component='h4' variant='body1'>
                        About TravelAssist
                    </Typography>
                    <Box mt={2} >
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            About Us
                        </Typography>
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            Privacy Policy
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'left'
                }}>
                    <Typography component='h4' variant='body1'>
                        Explore
                    </Typography>
                    <Box mt={2}>
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            Join
                        </Typography>
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            Blog
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    textAlign: 'left'
                }}>
                    <Typography component='h4' variant='body1'>
                        Do Bussiness with us
                    </Typography>
                    <Box mt={2}>
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            Owners
                        </Typography>
                        <Typography component='p' variant='body2' sx={{fontWeight: '600'}}>
                            Blog
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box></Box>
        </Container>
    </div>
  )
}

export default Footer