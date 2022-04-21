import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import {useSelector, useDispatch} from 'react-redux';
import {userActions} from '../../redux/action'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChangePasswordModal({open, handleClose}) {

    const {message} = useSelector(state => state.changePassword)
    const dispatch = useDispatch()
  
    const [password, setPassword] = React.useState({
        currentPassword: '',
        newPassword: '',
        reenteredPassword: ''
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setPassword({...password, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('called')
        if(password.newPassword !== password.reenteredPassword){
            alert('new password and re-enter new password is not same')
        }else{
            dispatch(userActions.changePassword(password.currentPassword, password.newPassword))
        }
        handleClose()
    }

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={handleSubmit}>
                <TextField id="prevPassword" name="currentPassword" value={password.currentPassword} onChange={handleChange} type='password' label='Current Password' fullWidth required sx={{marginTop: '2em'}} />
                <TextField id="newPassword" name="newPassword" value={password.newPassword} onChange={handleChange} type='password' label='New Password' fullWidth required sx={{marginTop: '2em'}} />
                <TextField id="reNewPassword" name="reenteredPassword" value={password.reenteredPassword} onChange={handleChange} type='password' label='re-enter new Password' fullWidth required sx={{marginTop: '2em'}} />
                <Button variant='contained' type='submit' sx={{marginTop: '2em'}} >Change Password</Button>
            </form>
        </Box>
      </Modal>
  );
}
