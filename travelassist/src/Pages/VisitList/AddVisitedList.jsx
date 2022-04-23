import React, {useState,useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {destinationActions,visitListActions} from '../../redux/action'
import {Link} from 'react-router-dom'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import PlaceIcon from '@mui/icons-material/Place';

import AddRatings from '../../components/Ratings/AddRatings/AddRatings'
import {InputBox, TextArea, Label, MuiButton} from '../Hotel/AddHotelReview/AddHotelReview.style'

function AddVisitedList() {

  const {destinationId} = useParams()
  const dispatch = useDispatch()
  const {destinationById, gettingDestinationsById} = useSelector(state => state.getDestinationById)

  useEffect(() => {
      dispatch(destinationActions.getDestinationById(destinationId))
  },[destinationId,dispatch])

  const [visitedListDetails, setVisitedListDetails] = useState({
      visit_summary: '',
      experience: '',
      things_did: '',
      stay: 0,
      transportation: 0,
      sites: 0
  })

  const setRating = (name,rating) => {
      setVisitedListDetails({...visitedListDetails,[name]: rating})
  }

  const handleChange = (e) => {
      setVisitedListDetails({...visitedListDetails,[e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
      dispatch(visitListActions.createVisitedList({...visitedListDetails, destination: destinationById.id, type: 'visited'}))
  }

  if(gettingDestinationsById){
      return <h2>Loading...</h2>
  }


  return (
    <Container maxWidth='lg' sx={{marginTop: '2em'}}>
        <Box>
            <Box sx={{
                textAlign: 'left',
            }}>
                <Typography component={Link} to={`/destinations/${destinationById?.id}`} sx={{
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    color: '#000',
                }}>
                    {destinationById?.name}
                </Typography>
                <Typography component='div' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '.8rem',
                }}>
                    <PlaceIcon fontSize='small' /> <span>{destinationById?.location}</span>
                </Typography>
            </Box>
            <Box
                component="img"
                sx={{
                    height: '32vh',
                    width: '100%',
                    objectPosition: 'center',
                    objectFit: 'cover',
                }}
                alt={`${destinationById?.name} image`}
                src={destinationById?.imagesrc[0]}
            />
        </Box>
        <Box sx={{textAlign: 'left'}}>
            <Label htmlFor='visit_summary'>
                Title of your visit
            </Label>
            <InputBox type='text' value={visitedListDetails.visit_summary} id='visit_summary' name='visit_summary' onChange={handleChange} placeholder='Summarize your visit or highlight an intresting detail' />
            <Label htmlFor="experience">
                Share Your experience
            </Label>
            <TextArea id='experience' value={visitedListDetails.experience} name='experience' onChange={handleChange} placeholder='Tell people about your experience, how was your visit, highlight preperation to make visit memorable' />
            <Label htmlFor='things_did'>
                Things you did
            </Label>
            <TextArea id='things_did' value={visitedListDetails.things_did} name='things_did' onChange={handleChange} placeholder='Tell people things you did during your visit and give honest suggestion on what to do and what not to do' />
            <Label>
                Rate availability of places to stay
            </Label>
            <AddRatings name='stay' rating={visitedListDetails.stay} setRating={setRating} />
            <Label>
                Rate transportation
            </Label>
            <AddRatings name='transportation' rating={visitedListDetails.transportation} setRating={setRating} />
            <Label>
                Rate site seeing
            </Label>
            <AddRatings name='sites' rating={visitedListDetails.sites} setRating={setRating} />
        </Box>
        <MuiButton sx={{marginTop: '2em'}} variant='contained' onClick={handleSubmit}>Add to visited</MuiButton>
    </Container>
  )
}

export default AddVisitedList