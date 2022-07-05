import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SearchBar = () => {
  const [input, setInput] = React.useState('');



  return (
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
  );
}
