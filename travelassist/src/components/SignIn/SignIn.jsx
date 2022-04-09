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

import {Link as RouteLink, Navigate} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'

function SignIn() {

    const dispatch = useDispatch()

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
        submitted: false
    })

    const handleChange = (e) => {
        setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
    }

    const {loggedIn} = useSelector(state => state.signin)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handle submit clicked')
        setLoginInfo({...loginInfo, submitted: true})
        const {username, password} = loginInfo
        if(username && password){
            dispatch(userActions.login(username, password, 'user'))
        }
    }

  if(loggedIn){
      return <Navigate to='/' />
  }

  return (
    <Box p={5}>
        <Typography component="h2" variant="h4" color="primary" sx={{textAlign: 'center', fontWeight: '700'}}>
            Sign In
        </Typography>
        <Box component="form" mt={2} p={2} >
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                mt={2}
                value={loginInfo.username}
                onChange={handleChange}
                error={loginInfo.submitted && !loginInfo.username}
                helperText={loginInfo.submitted && !loginInfo.username && 'Username is empty'}
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
                value={loginInfo.password}
                onChange={handleChange}
                // error={type === 'Invalid Password'}
                // helperText={type === 'Invalid Password' && message}
            />
            <Box>
                <FormControl>
                    <FormControlLabel 
                        value="remember-me"
                        control={<Checkbox />}
                        label="Remember Me"
                        labelPlacement='end'
                    />
                </FormControl>
            </Box>
            <Button variant="contained" onClick={handleSubmit} sx={{
                width: '100%',
                height: '55px',
                textTransform: 'capitalize',
                fontWeight: '500',
                fontSize: '1.1rem',
                marginTop: '1em'
            }}>
                Sign In
            </Button>
        </Box>
        <Typography component="p" variant="body2" sx={{
            textAlign: 'center',
            width: 'auto',
            display: 'block'
        }}>
            Don't have an account ?
            <Link component={RouteLink} to="/register">Sign Up</Link>
        </Typography>
        <Typography component="p" variant="body2" sx={{
            display: 'block',
            textAlign: 'center',
        }}>
            <span style={{fontSize: '1rem'}}>or</span><br /> Sign In With
        </Typography>
    </Box>
  )
}

export default SignIn