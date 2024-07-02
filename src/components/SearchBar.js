import React from 'react';
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3f51b5',
    },
    '&:hover fieldset': {
      borderColor: '#303f9f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1a237e',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#3f51b5',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#1a237e',
  },
});

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box sx={{ margin: '20px 0',display:'flex', width:'100%', justifyContent:'flex-end' }}>
      <CustomTextField
        label="Search Images"
        variant="outlined"
        style={{width:'300px'}}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
