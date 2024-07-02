import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '350px',
        maxWidth: '100%',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
      }}
      onClick={() => navigate(`/details/${image.id}`)}
    >
      <CardMedia
        component="img"
        height="240"
        image={image.urls.small}
        alt={image.alt_description}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent
        sx={{
          padding: '1rem',
          display: 'block',
          bgcolor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" fontWeight="bold" color="textPrimary">
          {image.alt_description || 'No description available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
