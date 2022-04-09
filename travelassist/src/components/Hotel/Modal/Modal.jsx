import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs'
import {updateCheckInAction} from '../../../redux/action'

import {useDispatch} from 'react-redux'

export default function FormDialog({open, handleClose, rooms, traveller}) {

  const [room, setRoom] = React.useState(rooms)
  const [travellers, setTravellers] = React.useState(traveller)


  const dispatch = useDispatch()

  const addRoom = () => {
      if(travellers > room)
        setRoom(room + 1)
  } 

  const removeRoom = () => {
    if(travellers > 1 && travellers <= (room * 2 - 2))
        setRoom(room - 1)
  }

  const addTraveller = () => {
      setTravellers(travellers + 1)
      if(travellers%2 === 0 || travellers === 0)
          setRoom(room + 1)
  }

  const removeTraveller = () => {
    if(travellers){
        if(travellers === room)
          setRoom(room - 1)
        setTravellers(travellers - 1)
        if(travellers === 1)
          setRoom(0)
    }
  }

  const handleUpdate = () => {
      console.log('buttonclicked')
      dispatch(updateCheckInAction.updateRoomsAndTraveller({
          rooms: room,
          traveller: travellers
      }))
      handleClose()
  }

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <Box display="flex" sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box mr={2} display="flex" justifyContent="space-between" alignItems="center">
                    <BedroomParentIcon />
                    <Typography ml={1}>Rooms</Typography>
                </Box>
                <Box sx={{
                    border: '1px solid',
                    padding: '0',
                }}>
                    <IconButton onClick={removeRoom}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography pt={1} pb={1} pl={3} pr={3} component='span' variant='subtitle2' sx={{
                        display: 'inline-block',
                        borderLeft: '1px solid',
                        borderRight: '1px solid',
                        height: '100%'
                    }}>
                        {room}
                    </Typography>
                    <IconButton onClick={addRoom}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box mt={4} display="flex" sx={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box mr={2} display="flex" justifyContent='space-between' alignItems='center'>
                    <PeopleIcon />
                    <Typography ml={1}>Travelers</Typography>
                </Box>
                <Box sx={{
                    border: '1px solid',
                    padding: '0',
                }}>
                    <IconButton onClick={removeTraveller}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography pt={1} pb={1} pl={3} pr={3} component='span' variant='subtitle2' sx={{
                        display: 'inline-block',
                        borderLeft: '1px solid',
                        borderRight: '1px solid',
                        height: '100%'
                    }}>
                        {travellers}
                    </Typography>
                    <IconButton onClick={addTraveller}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleUpdate} sx={{
              width: '100%',
          }}>Update</Button>
        </DialogActions>
      </Dialog>
  );
}