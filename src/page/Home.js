import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import ImageList from '../components/ImageList';
import PaginationComponent from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

 
  useEffect(() => {
    const fetchPreloadedImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos?client_id=0eS-nViDPVCcQzDSS6ND427dnSNV5M3dmj4sHDzHYaU', {
          params: {
            page: 1,
            per_page: 6,
          }
        });
        setImages(response.data);
        setTotalPages(response.headers['x-total']);
      } catch (error) {
        console.error('Error fetching preloaded images', error);
      }
    };

    fetchPreloadedImages();
  }, []);

  useEffect(() => {
    if (!searchQuery) return; 

    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos?client_id=0eS-nViDPVCcQzDSS6ND427dnSNV5M3dmj4sHDzHYaU', {
          params: {
            query: searchQuery,
            page: page,
            per_page: 6,
          }
        });
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  return (
    <Container style={{width:'80%'}}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <hr style={{border:'1px dashed gray', margin:'2rem 0 2rem 0'}}/>
      <ImageList images={images} />
      <hr style={{border:'1px dashed gray', margin:'2rem 0 2rem 0'}}/>
      <PaginationComponent page={page} setPage={setPage} totalPages={totalPages} />
    </Container>
  );
};

export default Home;
