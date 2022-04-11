import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CheckIcon from '@mui/icons-material/Check';
import DisplayRating from '../../Ratings/DisplayRatings/DisplayRatings';

import {Link} from 'react-router-dom'

function HotelInfoCard({hotel}) {
  return (
    <Container component='div' disableGutters maxWidth='lg' sx={{
      display: {xs: 'block', md: 'flex'},
      marginTop: '3em',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}>
       <Box component='img'
        src={hotel.coverimage}
        alt={hotel.name}
        sx={{
          flex: 1, 
          width: '100%',
          maxWidth: '320px',
          height: '300px',
          objectPosition: 'center',
          objectFit: 'cover',
        }}
       />
       <Box pl={3} pr={3} pt={1} pb={1} sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
       }}>
         <Typography component='h4' variant='h6' sx={{
           fontWeight: '600',
           margin: 0, 
           padding: 0
         }}>
           {hotel.name}
         </Typography>
         <Box sx={{
           margin: '1em auto',
         }}>
           <Typography component='p' variant='body1'>
             NRP. {hotel.pricepernight}
           </Typography>
           <Button component={Link} to={`/hotels/${hotel.id}`} variant='contained' sx={{
             width: '100%',
             marginTop: '1em'
           }}>
             View Deal
           </Button>
           <Typography component='div' variant='body2' textAlign='left' display='flex' alignItems='center' sx={{
             marginTop: '1em'
           }}>
              <CheckIcon />
              {hotel.cancellation} cancellation
           </Typography>
           {
             hotel.pay_at_stay && (
              <Typography component='div' variant='body2' textAlign='left' display='flex' alignItems='center'>
                <CheckIcon />
                Reserve now, pay at stay
              </Typography>
             )
           }
           <Box sx={{marginTop: '1em', textAlign: 'center'}}>
              <DisplayRating rating={hotel.average_rating}/>
           </Box>
         </Box>
       </Box>
       <Box sx={{flex: 2}}></Box>
    </Container>
  )
}

export default HotelInfoCard