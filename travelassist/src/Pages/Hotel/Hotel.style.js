import {styled} from '@mui/material/styles'

const HotelHero = styled('div')({
    backgroundImage: `url(${require('../../assests/hotels_hero.avif')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export default HotelHero