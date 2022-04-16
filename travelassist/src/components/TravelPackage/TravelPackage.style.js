import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const GridContainer = styled('div')`
    height: 100%;
    max-width: inherit;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1em;
    margin-top: 1em;

    @media (max-width: 950px){
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 550px){
        grid-template-columns: 1fr;
    }
`

const CustomTypography = styled(Typography)`
    text-align: left;
    margin-top: 10px;
`

const TravelPackageHero = styled('div')({
    backgroundImage: `url(${require('../../assests/travel_package_hero.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '35vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const ImageContainer = styled('div')({
    position: 'relative',
    height: '24vh',
    borderRadius: '4px',
})

const Image = styled('img')({
    display: 'block',
    objectPosition: 'center',
    objectFit: 'top',
    width: '100%',
    height: '100%',
    maxHeight: '30vh',
    borderRadius: '6px',
})

export {GridContainer, Image, ImageContainer, TravelPackageHero, CustomTypography}
