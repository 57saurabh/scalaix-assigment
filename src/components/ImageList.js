import React from 'react';
import { Grid } from '@mui/material';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <ImageCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageList;
