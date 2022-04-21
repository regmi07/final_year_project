import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {travelPackageActions} from '../../../redux/action/travel_package.action'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import ImageGrid from '../../../components/ImageGrid/ImageGrid'
import Itinerary from '../../../components/TravelPackage/Itinerary/Itinerary'
import {WrapperBox} from '../../Hotel/SpecificHotel/SpecificHotel.style'
import {CustomTypography} from '../../../components/TravelPackage/TravelPackage.style'

import {Link} from 'react-router-dom'

function SpecificTravelPackage() {
  const {travelPackageById} = useSelector(state => state.travelPackageById)

  const {packageId} = useParams()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(travelPackageActions.getTravelPackageById(packageId))
  },[])

  console.log(travelPackageById)

  if(!travelPackageById){
    return <h1>Loading...</h1>
  }
  return (
    <Container maxWidth='lg' sx={{marginTop: '2em'}}>
        <Typography component='h4' variant='h5' sx={{textAlign: 'left', fontWeight: '600', margin: '0'}}>
          {travelPackageById.title}
        </Typography>
        <ImageGrid images={travelPackageById.imagesrc} />
        <Box sx={{display: 'flex', gap: '1em', marginTop: '2em'}}>
          <Box sx={{flex: '3 1'}}>
            <WrapperBox style={{marginTop: '0'}}>
              <Typography component='div' variant='body2' sx={{textAlign: 'justify'}}>
                {travelPackageById.description}
              </Typography>
            </WrapperBox>
            <WrapperBox sx={{marginTop: '1em'}}>
              <Itinerary travel_package_id={packageId} />
            </WrapperBox>
          </Box>
          <Box sx={{flex: '1 3', maxWidth: '400px'}}>
            <WrapperBox style={{marginTop: '0', padding: '1em 2em'}}>
              <CustomTypography component='h5' variant='h6' sx={{fontWeight: '600'}}>Trip Details</CustomTypography>
              <CustomTypography component='p' variant='body1'>
                {travelPackageById.from} - {travelPackageById.to}
              </CustomTypography>
              <CustomTypography component='p' variant='body1'>
                {travelPackageById.start_date} to {travelPackageById.end_date}
              </CustomTypography>
              <CustomTypography component='p' variant='body1' sx={{fontSize: '1rem', fontWeight: '600'}}>
                Rs. {travelPackageById.priceperperson} <span style={{fontSize: '.8rem', fontWeight: '400'}}> per person</span>
              </CustomTypography>
              <CustomTypography component='p' variant='body1'>
                {travelPackageById.max_traveler} maximum travellers
              </CustomTypography>
              <Button component={Link} to={`/travelpackage/booking/${packageId}`} variant='contained' sx={{
                marginTop: '1.5em', 
                fontWeight: '600',
                textTransform: 'none',
              }}>
                Book Now
              </Button>
            </WrapperBox>
          </Box>
        </Box>
    </Container>
  )
}

export default SpecificTravelPackage