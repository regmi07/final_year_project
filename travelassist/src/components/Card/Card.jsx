import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import { CustomCardContent, CustomCardAction } from './Card.style';

import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {visitListActions} from '../../redux/action/visit_list.action'

export default function CardComponent({data, url}) {

  const {user} = useSelector(state => state.signin)
  const {planToVisitListByUser} = useSelector(state => state.planToVisitListByUser)

  const dispatch = useDispatch()

  const isInPlanToVisitList = () => {
      if(planToVisitListByUser){
        return planToVisitListByUser.some(
          list => {return list.destination === data?.id}
        )
      }
      return false
  }

  const [checked, setChecked] = React.useState(isInPlanToVisitList())
  console.log(checked, " :checked", data.id)

  const onCheckBoxChange = () => {
      if(checked){
        dispatch(visitListActions.removePlanToVisitListById(user.id,data?.id))
      }else{
        dispatch(visitListActions.createPlanToVisitList({user: user.id, destination: data.id, type: 'plan to visit'}))
      }

      setChecked(!checked)
  }

  return (
    <Card sx={{ 
      maxWidth: 270, 
      width: '100%', 
      minWidth: 270, 
      height: 320,
      maxHeight: 320, 
      position: 'relative', 
      borderRadius: '6px',
      marginRight: '1.5em'
    }}>
      <Box component={Link} to={`${url}/${data.id}`}>
        <CardMedia
          component="img"
          alt={data.name}
          image={data.coverimage}
          height= '100%'
        />
        <CustomCardContent>
          <Typography gutterBottom variant="body" component="div">
            {data.name}
          </Typography>
        </CustomCardContent>
      </Box>
      <CustomCardAction>
        <Checkbox label='favourite' checked={isInPlanToVisitList()} onChange={onCheckBoxChange} icon={<FavoriteBorder fontSize="medium" />} checkedIcon={<Favorite fontSize="medium" sx={{color: '#ff5d5d'}} />} />
      </CustomCardAction>
    </Card>
  );
}