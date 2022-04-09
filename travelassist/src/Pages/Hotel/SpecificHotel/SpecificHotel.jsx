import React, {useEffect} from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box'

import ImageGrid from '../../../components/ImageGrid/ImageGrid'
import Description from '../../../components/Hotel/Description/Description'
import DisplayRating from '../../../components/Ratings/DisplayRatings/DisplayRatings'
import Map from '../../../components/Map/Map'
import Reviews from '../../../components/Reviews/Reviews'

import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {hotelActions} from '../../../redux/action'

function SpecificHotel() {
  const {hotelId} = useParams()

  const {hotelById} = useSelector(state => state.getHotelById)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hotelActions.getHotelById(hotelId))
  },[hotelId, dispatch])

  console.log(hotelById)
  if(!hotelById){
    return <h1>getting data</h1>
  }
  return (
    <Container maxWidth='lg'>
        <Box sx={{
          marginTop: '2em'
        }}>
          <Typography component='div' variant='h5' sx={{
            fontWeight: 600,
            textAlign: 'left',
            paddingLeft: '.1em',
          }}>
            {hotelById.name}
          </Typography>
          <DisplayRating rating={hotelById.average_rating} size={'small'} />
          <Typography component='div' variant='subtitle2' sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
          }}>
            <PlaceIcon fontSize='small' />
            {hotelById.location}
          </Typography>
        </Box>
        <ImageGrid images={hotelById?.imagesrc} />
        <Description description={hotelById.description} rating={hotelById.average_rating} />
        <Map lng={hotelById.longitude} lat={hotelById.latitude} />
        <Reviews hotelId={hotelById.id} />
    </Container>
  )
}

export default SpecificHotel