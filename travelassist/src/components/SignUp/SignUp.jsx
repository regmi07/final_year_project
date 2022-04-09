import React, {useState} from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'

import {userActions} from '../../redux/action'

import {useSelector, useDispatch} from 'react-redux'

import {Link as RouteLink, Navigate} from 'react-router-dom'

function SignUp() {

    const dispatch = useDispatch()
    const {regestring, registered} = useSelector(state => state.register)
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    
    //   const [loading,setLoading] = React.useState(false)

      const handleChange = (event) => {
        setSignupInfo({...signupInfo, [event.target.name]: event.target.value}) 
      }
    
      const isFieldEmpty = () => {
        return !signupInfo.username.trim() || !signupInfo.name.trim() || !signupInfo.email.trim() || !signupInfo.password.trim() || !signupInfo.confirmPassword.trim()
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          if(!isFieldEmpty()){
              dispatch(userActions.register({
                  name: signupInfo.name, 
                  username: signupInfo.username, 
                  email: signupInfo.email, 
                  password: signupInfo.password, 
                  role: 'user'
            }))
          }
      }

      if(registered){
          return <Navigate to='/login' />
      }

  return (
    <Box p={5}>
        <Typography component="h2" variant="h4" color="primary" sx={{textAlign: 'center', fontWeight: '700'}}>
            Sign Up
        </Typography>
        <Box component="form" mt={2} p={2} >
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                mt={2}
                value={signupInfo.name}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                mt={2}
                value={signupInfo.username}
                onChange={handleChange}
                // error={type === 'Invalid Username'}
                // helperText={type === 'Invalid Username' && message}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                mt={2}
                value={signupInfo.email}
                onChange={handleChange}
                // error={type === 'Invalid Username'}
                // helperText={type === 'Invalid Username' && message}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                mt={2}
                value={signupInfo.password}
                onChange={handleChange}
                // error={type === 'Invalid Password'}
                // helperText={type === 'Invalid Password' && message}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                mt={2}
                value={signupInfo.confirmPassword}
                onChange={handleChange}
                // error={type === 'Invalid Password'}
                // helperText={type === 'Invalid Password' && message}
            />
            {/* <Box>
                <FormControl>
                    <FormControlLabel 
                        value="remember-me"
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement='end'
                    />
                </FormControl>
            </Box> */}
            <Button variant="contained" onClick={handleSubmit} sx={{
                width: '100%',
                height: '55px',
                textTransform: 'capitalize',
                fontWeight: '500',
                fontSize: '1.1rem',
                marginTop: '1em'
            }}>
                Sign Up
            </Button>
        </Box>
        <Typography component="p" variant="body2" sx={{
            textAlign: 'center',
            width: 'auto',
            display: 'block'
        }}>
            Already have an account ?
            <Link component={RouteLink} to='/login'>Sign In</Link>
        </Typography>
    </Box>
  )
}

export default SignUp