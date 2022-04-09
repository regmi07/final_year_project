import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import Hero from '../../components/Home/Hero/Hero'
import Row from '../../components/Row/Row'

import {homeRowData} from '../../helpers/data/home.row'


function HomePage() {

  return (
    <Container maxWidth='lg' >
        <CssBaseline />
        <Hero />
        {
          homeRowData.map((data, index) => {
            return <Row key={index} title={data.title} fetchFrom={data.fetch} />
          })
        }
    </Container>
  )
}

export default HomePage