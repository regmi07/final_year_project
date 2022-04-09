import React from 'react'
import Box from '@mui/material/Box'
import HeroStyle from './Hero.style'
import Search from '../../Search/Search'

function Hero() {
  return (
    <HeroStyle>
      <Search placeholder={'Search destinations and Hotels...'} />
    </HeroStyle>
  )
}
export default Hero