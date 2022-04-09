import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { DrawerHeader } from './Nav.style';

import {useTheme} from '@mui/material/styles'

import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

const drawerWidth = 240;

const pages = ['Destinations', 'Hotels', 'Travel Package', 'Travel Blog'];
const settings = ['Profile', 'Account', 'Logout'];

const Nav = () => {
    const theme = useTheme()

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const {loggedIn, user} = useSelector(state => state.signin)

    return (
        <AppBar position="sticky" sx={{
            background: '#fff',
            boxShadow: 'none'
        }}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        alignItems: 'center'
                    }}>
                        <Typography component={Link} to='/' variant="h5" noWrap color="primary" fontWeight={600} sx={{
                            fontFamily: 'cursive',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}>
                            TravelAssist
                        </Typography>
                    </Box>
                    <Box sx={{
                        flexGrow: 0,
                        display: {xs: 'flex', md: 'none'}
                    }}>
                        <IconButton
                            size='large'
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon fontSize='large' color='primary' />
                        </IconButton>
                        <Drawer sx={{
                            width: '100%',
                            maxWidth: {drawerWidth},
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                            }}
                            variant="persistent"
                            anchor="left"
                            open={Boolean(anchorElNav)}
                        >
                            <DrawerHeader sx={{margin: 2}}>
                                <Box sx={{
                                    display: 'flex',
                                    flexGrow: 1,
                                    justifyContent: 'center'
                                }}>
                                    {
                                        loggedIn ? (
                                            <Stack direction="row" spacing={2}>
                                            <Avatar alt={user.username} src={user.profilePicture} />
                                            <Typography variant="h7" component="h4" align='center' sx={{ paddingTop: '7px', color: 'dodgerblue'}}>
                                                {user.username}
                                            </Typography>
                                            </Stack>
                                        ) :
                                        (
                                            <Button
                                                variant='contained'
                                                component={Link}
                                                to="/login"
                                                sx={{
                                                    padding: '.8em 1.2em',
                                                    fontWeight: '600',
                                                    textTransform: 'capitalize',
                                                }}
                                                >
                                                Sign In
                                            </Button>
                                        )
                                    }
                                </Box>
                                <IconButton onClick={handleCloseNavMenu} >
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            <List>
                                {
                                    pages.map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                    ))
                                }
                            </List>
                            <Divider />
                            <List>
                                {settings.map((text, index) => (
                                    <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: {md: 'none', xs: 'flex'},
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Typography component={Link} to='/' variant="h5" noWrap color="primary" fontWeight={600} sx={{
                            fontFamily: 'cursive',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}>
                            TravelAssist
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: '#000',
                                    fontWeight: '700',
                                    display: 'block',
                                    marginRight: '8px',
                                    ':hover': {
                                        bgcolor: '#282828', // theme.palette.primary.main
                                        color: 'white',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: {xs: 'none', md: 'flex'} }}>
                        {
                            loggedIn?(
                                <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user.username} src={user.profilePicture} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{display: 'block !important', padding: '.4em 1.2em !important'}}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                    ))}
                                </Menu>
                                </>
                            ):(
                            <Button
                                variant='contained'
                                component={Link}
                                to="/login"
                                sx={{
                                    my: 2,
                                    fontWeight: '700', 
                                    display: 'block', 
                                    padding: '.8em 1.2em', 
                                    // ':hover': {
                                    //     bgcolor: '#282828', // theme.palette.primary.main
                                    //     color: 'white',
                                    // },
                                }}
                            >
                                Sign In
                            </Button>
                        )
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav;
