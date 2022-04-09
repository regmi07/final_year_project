import {styled} from '@mui/material/styles'

const HeroStyle = styled('div')({
    backgroundImage: `url(${require('../../../assests/home_hero_image.jpg')})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45vh',
    marginTop: '1em',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
})

export default HeroStyle;