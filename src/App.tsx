import React, { useState } from 'react';
import { IMovie } from './types';
import Intro from './components/Intro';
import MovieList from './components/movieList/MovieList';
import NominateList from './components/nominateList/NominateList';
import SearchBar from './components/SearchBar';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Flex = styled.div`
  display: flex;
  margin-top: 4rem;
  min-height: 40rem;
`

function App() {
  const [ title, setTitle ] = useState<string>('');
  const [ movies, setMovies ] = useState<IMovie[]>([]);
  

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Intro />
        </header>
        <main>
          <SearchBar title={title} setTitle={setTitle} setMovies={setMovies}/>
          <Flex>
            <MovieList title={title} movies={movies} />
            <NominateList />
          </Flex>
        </main>
      </Container>
    </div>
  );
}

export default App;
