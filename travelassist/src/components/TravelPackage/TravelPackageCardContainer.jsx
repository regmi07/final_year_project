import React, {useEffect} from 'react'

import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {travelPackageActions} from '../../redux/action'

import {GridContainer, Image, ImageContainer} from './TravelPackage.style'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function TravelPackageCardContainer() {
  const dispatch = useDispatch()
  const {gettingAvailablTravelPackage, availableTravelPackage} = useSelector(state => state.getAvailableTravelPackageForBooking)
  useEffect(() => {
    dispatch(travelPackageActions.getAvailableTravelPackageForBooking({}))
  },[dispatch])

  if(gettingAvailablTravelPackage){
      return <h1>Loading...</h1>
  }

  return (
    <Box sx={{marginTop: '2em'}}>
        <Typography component='h4' variant='h5' sx={{fontWeight: '600', textAlign: 'left'}}>Popular Travel Package</Typography>
        <GridContainer>
            {
                availableTravelPackage && availableTravelPackage.length > 0 && availableTravelPackage.map((travelPackage) => {
                    return (
                        <Box key={travelPackage.id} component={Link} to={`/travelpackage/${travelPackage.id}`}>
                            <ImageContainer >
                                <Box sx={{
                                    width: '100%',
                                    padding: '.25em .75em',
                                    position: 'absolute',
                                    bottom: '0',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    letterSpacing: '1px',
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(1.5px)',
                                }}>
                                    <Typography component='h4' variant='h6' sx={{fontWeight: '600'}}>
                                        {travelPackage.to}
                                    </Typography>
                                    <Typography component='p' variant='subtitle2' sx={{fontWeight: '600'}}>
                                        Rs. {travelPackage.priceperperson}
                                    </Typography>
                                </Box>
                                <Image src={travelPackage.coverimage} alt={travelPackage.title} />
                            </ImageContainer>
                        </Box>
                    )
                })
            }
        </GridContainer>
    </Box>
  )
}

export default TravelPackageCardContainer