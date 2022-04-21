import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import LockIcon from '@mui/icons-material/Lock';
import ChangePasswordModal from '../../components/Profile/ChangePasswordModal'
import {userActions} from '../../redux/action/user.action'

import './Profile.css'

import Tabs from '../../components/Tabs/Tabs'

import {useSelector, useDispatch} from 'react-redux'

function Profile() {
  const {user} = useSelector(state => state.signin)

  const dispatch = useDispatch()

  const [openChangePassword, setOpenChangePassword] = React.useState(false)

  const handleChangePasswordClose = () => {
    setOpenChangePassword(!openChangePassword)
  }

  const handleProfilePictureChange = (e) => {

    const formdata = new FormData()
    formdata.append('file', e.target.files[0])
    dispatch(userActions.updateProfilePicture(user.id, formdata))
  }

  return (
    <Container maxWidth='lg'>
        <Box sx={{
          margin: '2em 0', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Box sx={{display: 'flex', gap: '1em'}}>
          <div className="wrapper">
            <Avatar src={ user.profilePicture} sx={{ width: 65, height: 65, cursor: 'pointer'}} />
            <input type="file" onChange={handleProfilePictureChange} accept='image/png, image/jpeg' />
          </div>
            <Box>
                <Typography sx={{fontWeight: '600', textAlign: 'left'}}>{user.name}</Typography>
                <Typography variant='subtitle2' sx={{fontSize: '.8rem', color: '#1b1b1b', textAlign: 'left'}}>@{user.username}</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" >
            <Button variant='contained' sx={{ textTransform: 'none', fontWeight: '600'}} onClick={handleChangePasswordClose}>Change Password <LockIcon /></Button>
          </Box>
        </Box>
        <Tabs />
        <ChangePasswordModal open={openChangePassword} handleClose={handleChangePasswordClose} />
    </Container>
  )
}

export default Profile