import React, {useState} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import dayjs from 'dayjs'

import {useSelector, useDispatch} from 'react-redux'
import {weatherActions} from '../../redux/action'

function WeatherComponent({lon,lat}){

    const [showWeather, setShowWeather] = useState(false)

    const {coordinates,weatherInfo} = useSelector(state => state.weatherInformation)
    const dispatch = useDispatch()

    const onWeatherIconClick = () => {
        setShowWeather(!showWeather)
        if(coordinates?.lon === lon && coordinates?.lat === lat){
            return
        }
        dispatch(weatherActions.getWeatherByDestination(lon, lat))
    }

    console.log(weatherInfo)

    return (
        <Box sx={{
            position: 'absolute',
            top: 10,
            left: 10, 
            background: 'rgba(225, 217, 209, .3)',
            padding: '.15em .4em',
            borderRadius: '6px',
            fontWeight: '600',
            backdropFilter: 'blur(1px)',
            color: '#fff',
            transition: 'all 2s',
        }}>
            <Tooltip title="click to view weather">
              <IconButton onClick={onWeatherIconClick}>
                <WbSunnyIcon fontSize='large' sx={{
                  color: 'orange',
                }} />
              </IconButton>
            </Tooltip>
            <Box display={showWeather ? 'block': 'none'} sx={{padding: '1em'}}>
                <Box sx={{display: 'flex', gap: '10px'}}>
                    <Typography component='p' variant='body1' sx={{fontWeight: 600}}>
                        {dayjs().format('MMMM DD, YYYY')}
                    </Typography>
                    <Typography component='p' variant='body1' sx={{fontWeight: 600}}>
                        {dayjs().format('dddd')}
                    </Typography>
                </Box>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Temperature: {weatherInfo?.main.temp} &deg;C
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Feels like: {weatherInfo?.main.feels_like} &deg;C
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Sunrise: {new Date(weatherInfo?.sys.sunrise * 1000).toLocaleTimeString('en-NP')}
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Sunset: {new Date(weatherInfo?.sys.sunset * 1000).toLocaleTimeString('en-NP')}
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Description: {weatherInfo?.weather[0].description}
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Cloudiness: {weatherInfo?.clouds.all} %
                </Typography>
                <Typography component='p' variant='body1' sx={{textAlign: 'left',marginTop: '.5em'}}>
                    Humidity: {weatherInfo?.main.humidity} %
                </Typography>
            </Box>
        </Box>
    )
}

export default WeatherComponent