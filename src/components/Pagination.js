import React from 'react';
import { Container, Pagination } from '@mui/material';

const PaginationComponent = ({ page, setPage, totalPages }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container sx={{width:'100%', display:"flex", justifyContent:'center', alignItems:'center', margin:'0 0 10px 0'}}>
    <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Container>
  );
};

export default PaginationComponent;
