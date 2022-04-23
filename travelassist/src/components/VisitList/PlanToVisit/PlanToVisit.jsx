import React from 'react'

import Box from '@mui/material/Box'

import PlanToVisitCard from './PlanToVisitCard'

import {useSelector} from 'react-redux'

function PlanToVisit() {
    const {planToVisitListByUser} = useSelector(state => state.planToVisitListByUser)
    return (
        <Box>
            {
                planToVisitListByUser?.length > 0 ? 
                planToVisitListByUser.map((list) => {
                    return <PlanToVisitCard key={list.destination} list={list} />
                })
                : (<h2> Your plan to visit list is empty </h2>)
            }
        </Box>
    )
}

export default PlanToVisit