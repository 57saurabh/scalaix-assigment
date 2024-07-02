import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';


const Details = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=0eS-nViDPVCcQzDSS6ND427dnSNV5M3dmj4sHDzHYaU`);
        setImage(response.data);
      } catch (error) {
        console.error('Error fetching image details', error);
      }
    };

    fetchImageDetails();
  }, [id]);

  return (
    <Container
    sx={{
      marginTop: '2rem',
    }}
  >
    <Button
      variant="contained"
      color="primary"
      onClick={() => navigate('/')}
      sx={{
        marginBottom: '1rem',
        bgcolor: 'primary.main',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
    >
      Back
    </Button>
    {image && (
      <Card
        sx={{
          width: '100%',
        }}
      >
         <CardMedia
            component="img"
            height="400"
            image={image.urls.regular}
            alt={image.alt_description}
            sx={{ objectFit: 'contain' }}
          />
        <CardContent
          sx={{
            padding: '1rem',
            textAlign: 'center',
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="textPrimary">
            {image.alt_description || 'No description available'}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
              Uploaded by{' '}
              <Link href={image.user.links.html} target="_blank" rel="noopener noreferrer">
                {image.user.name}
              </Link>{' '}
              on Unsplash
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Dimensions: {image.width} x {image.height} pixels
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Uploaded on: {new Date(image.created_at).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Camera: {image.exif.make} {image.exif.model}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Likes : {image.likes}
            </Typography>
        </CardContent>
      </Card>
    )}
  </Container>
  );
};

export default Details;
