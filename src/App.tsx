import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Movie } from './requests'
import { MovieContainer } from './components/MovieContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { isExternalModuleNameRelative } from 'typescript';



export interface IMovie {
  title: string | undefined,
  plot: string | undefined
  image: string | undefined,
  actors: string | undefined,
  year: number | undefined,
}

function App() {


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [movie, setMovie] = React.useState<IMovie | undefined>(undefined);
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    Movie.one(input).then((r) => {
      let m = { title: r.Title, plot: r.Plot, image: r.Poster, actors: r.Actors, year: r.Year } as IMovie
      setMovie(m)
    }
    ).catch((e) =>
      console.log(e)
    )
  }, [input, isExternalModuleNameRelative]);

  return (
    <ThemeProvider theme={darkTheme}>

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

        {movie && movie.title ?
          <MovieContainer image={movie.image} title={movie.title} plot={movie.plot} actors={movie.actors} year={movie.year} />
          :
          <div style={{ margin: "auto", padding: '10px', width: '50%' }} >

            <CircularProgress size={300} />
          </div>
        }
      </Container>
    </ThemeProvider >
  );
}

export default App;
