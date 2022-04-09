import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  '0.5000': 'Useless',
  '1.0000': 'Useless',
  '1.5000': 'Poor',
  '2.0000': 'Poor',
  '2.5000': 'Ok',
  '3.0000': 'Ok',
  '3.5000': 'Good',
  '4.0000': 'Good',
  '4.5000': 'Excellent',
  '5.0000': 'Excellent',
};

export default function DisplayRating({rating, size = 'medium'}) {
  console.log(rating)
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={parseFloat(rating)}
        readOnly
        precision={0.5}
        size={size}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, fontSize: '.95rem', fontWeight: '500' }}>{labels[rating]}</Box>
      {
        console.log(labels['4.0000'])
      }
    </Box>
  );
}
