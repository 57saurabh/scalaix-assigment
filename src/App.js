import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Details from './page/Details';
import Home from './page/Home';
import theme from './theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
