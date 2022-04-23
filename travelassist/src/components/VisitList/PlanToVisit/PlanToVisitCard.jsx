import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'
import PlaceIcon from '@mui/icons-material/Place';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {visitListActions} from '../../../redux/action'

function PlanToVisitCard({list}) {
  const {user} = useSelector(state => state.signin)
  const dispatch = useDispatch()
  const removeFromPlanToVisit = () => {
      console.log('remove from plan to visit clicked')
      dispatch(visitListActions.removePlanToVisitListById(user.id,list.destination))
  }

  return (
    <Box sx={{display: 'flex', gap: '1em', marginTop: '1.5em', alignItems: 'center'}}>
        <Box
            component="img"
            sx={{
                height: 100,
                width: 80,
                objectPosition: 'center',
                objectFit: 'cover',
            }}
            alt={`${list.name} image`}
            src={list.coverimage}
       />
       <Box sx={{
           textAlign: 'left',
           width: {xs: '100%', md: '250px'}
        }}>
           <Typography component={Link} to={`/destinations/${list.destination}`} sx={{
               textAlign: 'left',
               fontWeight: 600,
               textDecoration: 'none',
               color: '#000'
           }}>
               {list.name}
           </Typography>
           <Typography component='div' sx={{
               display: 'flex',
               alignItems: 'center',
               fontSize: '.8rem'
            }}>
               <PlaceIcon fontSize='small' /> <span>{list.location}</span>
           </Typography>
       </Box>
       <Box>
            <Tooltip title="add to visited list">
                <IconButton component={Link} to={`/addvisitedlist/${list.destination}`}>
                    <AddBoxIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="remove from planned to visit">
                <IconButton onClick={removeFromPlanToVisit}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
       </Box>
    </Box>
  )
}

export default PlanToVisitCard