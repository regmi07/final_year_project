import React from 'react'

import Map, {Marker} from 'react-map-gl'

import RoomIcon from '@mui/icons-material/Room';

import {WrapperBox, SubHeading} from '../../Pages/Hotel/SpecificHotel/SpecificHotel.style'


function MapContainer({lat, lng, zoom = 14}) {
  return (
    <WrapperBox>
      <SubHeading>
        Location
      </SubHeading>
      <Map
        initialViewState={
          {
            longitude: lng,
            latitude: lat,
            zoom: zoom
          }
        }
        style={{width: '100%', height: '350px'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker longitude={lng} latitude={lat}>
          <RoomIcon fontSize='large' sx={{color: '#de432a'}} anchor="top" />
        </Marker>

      </Map>
    </WrapperBox>
  )
}
export default MapContainer
