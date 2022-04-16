import React from 'react'
import TravelPackageCardContainer from '../../components/TravelPackage/TravelPackageCardContainer'
import DateAndDestination from '../../components/TravelPackage/DateAndDestination/DateAndDestination'

import Container from '@mui/material/Container'

import {TravelPackageHero} from '../../components/TravelPackage/TravelPackage.style'

function TravelPackage() {
  return (
    <Container maxWidth='lg'>
        <TravelPackageHero>
          <DateAndDestination />
        </TravelPackageHero>
        <TravelPackageCardContainer />
    </Container>
  )
}

export default TravelPackage