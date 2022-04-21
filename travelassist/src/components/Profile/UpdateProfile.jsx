import React, {useState} from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import {userActions} from '../../redux/action'

import {useSelector, useDispatch} from 'react-redux'

function UpdateProfile() {
  const {user} = useSelector(state => state.signin)
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({
      name: user.name,
      username: user.username,
      email: user.email
  })

  const handleChange = (e) => {
      console.log(e.target.value)
      setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
      console.log('handle submit called')
      dispatch(userActions.updateUserDetails(user.id,userInfo))
  }

  return (
    <Box maxWidth="sm" sx={{marginTop: '2em'}}>
         <TextField id="outlined-name" name='name' value={userInfo.name} onChange={handleChange} fullWidth label="Name" />
         <TextField id="outlined-username" name='username' value={userInfo.username} onChange={handleChange} fullWidth label="Username" sx={{marginTop: '2em'}} />
         <TextField id="outlined-email" name='email' value={userInfo.email} onChange={handleChange} fullWidth label="Email" disabled sx={{marginTop: '2em'}} />
         <Button variant='contained' onClick={handleSubmit} sx={{marginTop: '2em'}}>Update</Button>
    </Box>
  )
}

export default UpdateProfile