import React from 'react'
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