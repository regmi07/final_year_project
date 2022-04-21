import React, {useState, useEffect} from 'react'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Carousel from '../../components/Carousel/Carousel'
import Row from '../../components/Row/Row'

import WeatherComponent from '../../components/Weather/WeatherComponent'

import {ImageContainer} from '../../components/Carousel/Carousel.style'

import {useParams} from 'react-router-dom'

import {specificDestinationRow} from '../../helpers/data/specificDestination.row'

import {destinationService} from '../../services/destinations/destination.service'

function SpecificDestination() {
  const {id} = useParams()

  const [destination, setDestination] = useState({})

  useEffect(() => {
    const fetchDestination = async() => {
      const dest = await destinationService.getDestinationById(id)
      setDestination(dest)
    }

    fetchDestination()
  }, [id])

  function isDestinationEmpty(destination){
    for(let dest in destination)
      return false
    return true
  }

  if(!destination || isDestinationEmpty(destination)){
    return <div className="load">
      <h1>Loading...</h1>
    </div>
  }

  const index = destination?.description?.indexOf(' ')

  return (
    <Container maxWidth='lg'>
        <CssBaseline />
        <ImageContainer>
          <Carousel images={destination.imagesrc} />
          <Typography component='div' variant='h4' sx={{ 
              position: 'absolute',
              top: 10,
              right: 10, 
              background: 'rgba(224, 225, 228, .3)',
              padding: '.15em .4em',
              borderRadius: '6px',
              fontWeight: '600',
              color: '#fff'
          }}>
              Explore <span style={{color: 'orange'}}>{destination.name}</span>
          </Typography>
          <WeatherComponent lon={destination.longitude} lat={destination.latitude} />
        </ImageContainer>
        <Box component='div' sx={{
            padding: '2em',
            marginTop: '2em',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}>
            <Typography component='div' variant='body' sx={{
              textAlign: 'justify',
            }}>
                <strong>
                  {
                    destination.description.substring(0, index)
                  }
                </strong>
                {
                  destination.description.substring(index, destination.description.length - 1)
                }
            </Typography>
        </Box>
        <Box component='div' sx={{
          marginTop: '4em'
        }}>
          {
            specificDestinationRow.map((destrow, index) => {
              return <Row key={index} title={destrow.title} fetchFrom={destrow.fetch} dest={destination.name} />
            })
          }
        </Box>
    </Container>
  )
}

export default SpecificDestination