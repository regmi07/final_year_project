import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import {RatingLabelBox} from './AddHotelRatings.style';

const labels = {
  0: 'Click to rate',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Very Good',
  5: 'Excellent',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function AddRatings({name='rating',rating, setRating}) {
    
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={rating}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setRating(name, newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {rating !== null && (
        <RatingLabelBox>{labels[hover !== -1 ? hover : rating]}</RatingLabelBox>
      )}
    </Box>
  );
}
