import React from 'react'
import VisitedCard from './VisitedCard'

import {useSelector} from 'react-redux'

import Box from '@mui/material/Box' 

function Visited() {
  const {gettingVisitedListByUser, visitedListByUser} = useSelector(state => state.visitedListByUser)

  if(gettingVisitedListByUser){
    return <h2>Loading...</h2>
  }

  return (
    <Box>
      {
          visitedListByUser?.length > 0 ? (
              visitedListByUser.map((list) => {
                  return <VisitedCard key={list.destination} list={list} />
              })
          ) : <h2>Your visited list is empty</h2>
      }
    </Box>
  )
}

export default Visited