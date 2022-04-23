import React, {useState, useEffect} from 'react'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Carousel from '../../components/Carousel/Carousel'
import Row from '../../components/Row/Row'
import VisitListDestinationCard from '../../components/VisitList/VisitListDestinationCard'

import WeatherComponent from '../../components/Weather/WeatherComponent'

import {ImageContainer} from '../../components/Carousel/Carousel.style'

import {useParams} from 'react-router-dom'

import {specificDestinationRow} from '../../helpers/data/specificDestination.row'

import {destinationActions, visitListActions} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'

function SpecificDestination() {
  const {id} = useParams()
  const dispatch = useDispatch()

  const {destinationById} = useSelector(state => state.getDestinationById)
  const {visitedListByDestination} = useSelector(state => state.visitedListByDestination)
  
  useEffect(() => {
      dispatch(destinationActions.getDestinationById(id))
      dispatch(visitListActions.getVisitedListByDestination(id))
  },[id,dispatch])

  function isDestinationEmpty(destination){
    for(let dest in destination)
      return false
    return true
  }

  if(!destinationById || isDestinationEmpty(destinationById)){
    return <div className="load">
      <h1>Loading...</h1>
    </div>
  }

  const index = destinationById?.description?.indexOf(' ')

  return (
    <Container maxWidth='lg'>
        <CssBaseline />
        <ImageContainer>
          <Carousel images={destinationById?.imagesrc} />
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
              Explore <span style={{color: 'orange'}}>{destinationById?.name}</span>
          </Typography>
          <WeatherComponent lon={destinationById?.longitude} lat={destinationById?.latitude} />
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
                    destinationById?.description.substring(0, index)
                  }
                </strong>
                {
                  destinationById?.description.substring(index, destinationById?.description.length - 1)
                }
            </Typography>
        </Box>
        <Box component='div' sx={{
          marginTop: '4em'
        }}>
          {
            specificDestinationRow.map((destrow, index) => {
              return <Row key={index} title={destrow.title} fetchFrom={destrow.fetch} dest={destinationById?.name} />
            })
          }
        </Box>
        {
            visitedListByDestination?.length > 0 && (
              <Box component='div' sx={{
                marginTop: '4em'
              }}>
                <Typography component='h3' variant='h5' sx={{fontWeight: 600, textAlign: 'left'}}>
                  What people who already visited {destinationById.name} say
                </Typography>
                {
                  visitedListByDestination.map((list) => {
                    return <VisitListDestinationCard key={`${list.destination} ${list.name}`} list={list} />
                  })
                }
              </Box>
            )
        }
    </Container>
  )
}

export default SpecificDestination