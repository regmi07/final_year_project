import React, {useEffect} from 'react'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Carousel from '../../components/Carousel/Carousel'
import Row from '../../components/Row/Row'

import {ImageContainer} from '../../components/Carousel/Carousel.style'

import {useParams} from 'react-router-dom'

import {thingsToDoActions} from '../../redux/action'

import {useSelector, useDispatch} from 'react-redux'

function SpecificThingsToDo() {
    const {thingstodoid} = useParams()
    const dispatch = useDispatch()

    const {thingsToDoById} = useSelector(state => state.thingsToDoById)

    useEffect(() => {
        dispatch(thingsToDoActions.getThingsToDoById(thingstodoid))
    }, [thingstodoid, dispatch])

    console.log(thingsToDoById);

    if(!thingsToDoById){
        return <h1>Loading...</h1>
    }

  return (
    <Container maxWidth='lg'>
        <CssBaseline />
        <Typography component='div' variant='h5' sx={{ 
              textAlign: 'left',
              fontWeight: '600',
              marginTop: '1.5em'
          }}>
              {thingsToDoById?.name}
          </Typography>
        <Box sx={{ 
            display: 'flex',
            gap: '1.25em',
        }}>
            <Box sx={{
                flex: 1, 
                textAlign: 'justify',
                padding: '1.2em',
                boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px'
            }}>
                <Typography variant='h6' sx={{
                    textAlign: 'center', 
                    fontWeight: '600',
                    marginBottom: '1rem'
                }}>
                    About
                </Typography>
                <Typography componsnt='div' variant='p' sx={{fontSize: '.95rem'}}>
                    {thingsToDoById?.description}
                </Typography>
            </Box>
            <ImageContainer sx={{flex: 3}}>
                <Carousel images={thingsToDoById?.imagesrc} />
            </ImageContainer>
        </Box>
    </Container>
  )
}

export default SpecificThingsToDo