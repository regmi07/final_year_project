import React, {useEffect} from 'react'

import Box from '@mui/material/Box'

import {useSelector, useDispatch} from 'react-redux'

import {itineraryActions} from '../../../redux/action'

import {CustomTypography} from '../../TravelPackage/TravelPackage.style'

function Itinerary({travel_package_id}) {

  const dispatch = useDispatch()

  const {gettingItineraryByTravelPackage,itineraryByTravelPackage} = useSelector(state => state.getItineraryByTravelPackage)
  
  useEffect(() => {
    dispatch(itineraryActions.getItineraryByTravelPackage(travel_package_id))
  },[travel_package_id, dispatch])

  if(gettingItineraryByTravelPackage){      
      return <h1>Loading...</h1>
  }


  return (
    <Box>
        <CustomTypography component='h4' variant='h5' sx={{fontWeight: '600'}}>
            Itinerary
        </CustomTypography>
        {
            (itineraryByTravelPackage && itineraryByTravelPackage.length >= 0) ?
            itineraryByTravelPackage.map((itinerary) => {
                return (
                    <Box key={itinerary.id}>
                        <CustomTypography sx={{fontWeight: '600', marginTop: '1.5em'}}>
                            {`Day ${itinerary.day} ${itinerary.title} ${itinerary.duration}`}
                        </CustomTypography>
                        <CustomTypography component='div' variant='subtitle2' sx={{textAlign: 'justify', marginTop: '1em'}}>
                            {itinerary.description}
                        </CustomTypography>
                    </Box>
                )
            })
            : <h4>No Itinerary found for this package</h4>
        }
    </Box>
  )
}

export default Itinerary