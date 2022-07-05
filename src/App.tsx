import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { SearchBar } from './components/SearchBar'
import './App.css';




function App() {


  return (
    <Container maxWidth="sm" sx={{ marginTop: '10rem' }}>
      <CssBaseline />
      <SearchBar />
    </Container>
  );
}

export default App;
