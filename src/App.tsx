import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Movie } from './requests'
import './App.css';




function App() {

  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    console.log(input)
    Movie.one(input).then((r) =>
      console.log(r)
    ).catch((e) =>
      console.log(e)
    )
  }, [input]);
  return (
    <Container maxWidth="sm" sx={{ marginTop: '10rem' }}>
      <CssBaseline />
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="search"
          label="Search For a Movie"
          value={input}
          onChange={e => setInput(e.target.value)}
          fullWidth={true}
        />
      </Box>
    </Container>
  );
}

export default App;
