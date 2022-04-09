import React from 'react'

import Box from '@mui/material/Box'

import {GridContainer, ImageContainer, Image} from './ImageGrid.style'
import {WrapperBox} from '../../Pages/Hotel/SpecificHotel/SpecificHotel.style'

function ImageGrid({images}) {
  return (
      <WrapperBox>
          <GridContainer>
              <Box gridArea='main'>
                <Image src={images[2]} alt='hotel-image' />
              </Box>
              <ImageContainer>
                <Image src={images[1]} alt='hotel-image' />
              </ImageContainer>
              <ImageContainer>
                <Image src={images[0]} alt='hotel-image' />
              </ImageContainer>
              <ImageContainer>
                <Image src={images[3]} alt='hotel-image' />
              </ImageContainer>
              <ImageContainer>
                <Image src={images[4]} alt='hotel-image' />
              </ImageContainer>
          </GridContainer>
      </WrapperBox>
  )
}

export default ImageGrid